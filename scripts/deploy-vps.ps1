[CmdletBinding()]
param(
    [string]$Server = "89.252.153.119",
    [string]$User = "ubuntu",
    [string]$KeyPath = "$env:USERPROFILE\.ssh\muhasebedemo_deploy"
)

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $PSScriptRoot
$releaseId = Get-Date -Format "yyyyMMdd-HHmmss"
$archiveName = "limitra-$releaseId.tar.gz"
$localArchive = Join-Path ([System.IO.Path]::GetTempPath()) $archiveName
$remoteArchive = "/tmp/$archiveName"
$remoteRelease = "/var/www/limitra/releases/$releaseId"
$sshTarget = "$User@$Server"
$sshOptions = @("-i", $KeyPath, "-o", "BatchMode=yes", "-o", "ConnectTimeout=30")

if (-not (Test-Path -LiteralPath $KeyPath -PathType Leaf)) {
    throw "SSH anahtari bulunamadi: $KeyPath"
}

try {
    Push-Location $projectRoot

    Write-Host "[0/5] Sunucu yuk kontrolu yapiliyor..."
    $loadCheck = & ssh @sshOptions $sshTarget "cat /proc/loadavg"
    if ($loadCheck) {
        $load1 = [double]($loadCheck.Split(' ')[0])
        Write-Host "Sunucu anlik yuk degeri (1 dk): $load1"
        if ($load1 -gt 3.0) {
            throw "Sunucu su an yuk altinda (load: $load1 > 3.0). Guvenlik icin deploy durduruldu. Lutfen 2-3 dakika sonra tekrar deneyin."
        }
    }

    Write-Host "[1/5] Site derleniyor..."
    npm run build
    if ($LASTEXITCODE -ne 0) { throw "Derleme basarisiz oldu." }

    Write-Host "[2/5] Ic baglantilar denetleniyor..."
    npm run check:links
    if ($LASTEXITCODE -ne 0) { throw "Baglanti denetimi basarisiz oldu." }

    Write-Host "[3/5] Yayin paketi hazirlaniyor..."
    tar -czf $localArchive -C (Join-Path $projectRoot "dist") .
    if ($LASTEXITCODE -ne 0) { throw "Yayin paketi olusturulamadi." }

    Write-Host "[4/5] Paket sunucuya aktariliyor..."
    & scp @sshOptions $localArchive "${sshTarget}:$remoteArchive"
    if ($LASTEXITCODE -ne 0) { throw "Paket sunucuya aktarilamadi." }

    Write-Host "[4b/5] Nginx yapilandirmasi esitleniyor..."
    # Windows OpenSSH scp ters bolu dizilerini kacis olarak yorumlar; duz bolu kullan.
    $nginxConfLocal = (Join-Path $projectRoot "deploy/nginx-limitra.conf").Replace([char]92, '/')
    & scp @sshOptions $nginxConfLocal "${sshTarget}:/tmp/limitra.conf"
    if ($LASTEXITCODE -ne 0) { throw "Nginx yapilandirmasi aktarilamadi." }
    $nginxCommand = "set -e; if ! sudo cmp -s /tmp/limitra.conf /etc/nginx/sites-available/limitra.conf; then sudo cp /etc/nginx/sites-available/limitra.conf /etc/nginx/sites-available/limitra.conf.bak; sudo cp /tmp/limitra.conf /etc/nginx/sites-available/limitra.conf; sudo nginx -t || { sudo cp /etc/nginx/sites-available/limitra.conf.bak /etc/nginx/sites-available/limitra.conf; exit 1; }; fi; rm -f /tmp/limitra.conf"
    & ssh @sshOptions $sshTarget $nginxCommand
    if ($LASTEXITCODE -ne 0) { throw "Nginx yapilandirmasi dogrulanamadi; eski yapilandirma geri yuklendi." }

    Write-Host "[5/5] Yeni surum atomik olarak etkinlestiriliyor..."
    $remoteCommand = "set -e; sudo mkdir -p '$remoteRelease'; sudo tar -xzf '$remoteArchive' -C '$remoteRelease'; sudo ln -sfn '$remoteRelease' /var/www/limitra/current; sudo nginx -t; sudo systemctl reload nginx; rm -f '$remoteArchive'; (sudo find /var/www/limitra/releases -mindepth 1 -maxdepth 1 -type d -printf '%T@ %p\n' | sort -nr | tail -n +6 | cut -d' ' -f2- | xargs -r sudo rm -rf >/dev/null 2>&1 &)"
    & ssh @sshOptions $sshTarget $remoteCommand
    if ($LASTEXITCODE -ne 0) { throw "Sunucudaki yayin islemi basarisiz oldu." }

    Write-Host "Yayin tamamlandi: https://limitra.online (surum $releaseId)"
}
finally {
    Pop-Location -ErrorAction SilentlyContinue
    if (Test-Path -LiteralPath $localArchive) {
        Remove-Item -LiteralPath $localArchive -Force
    }
}
