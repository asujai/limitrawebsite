# Limitra Günlük Haber Kontrol ve Telafi Betiği
# Bu betik, sitenin haber veritabanını kontrol eder.
# Eğer bugün henüz bir haber girilmemişse durumu bildirir ve istenirse agentapi oturumu başlatır.

param (
    [switch]$AutoTrigger = $false
)

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir
$HaberlerJson = Join-Path $ProjectRoot "src\data\haberler.json"

if (-not (Test-Path $HaberlerJson)) {
    Write-Error "Haber veri tabanı bulunamadı: $HaberlerJson"
    exit 1
}

$Today = (Get-Date).ToString("yyyy-MM-dd")
$Haberler = Get-Content $HaberlerJson -Raw -Encoding UTF8 | ConvertFrom-Json
$Latest = $Haberler[0]

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Limitra Günlük Haber Durum Kontrolü" -ForegroundColor Cyan
Write-Host "Bugünün Tarihi  : $Today"
Write-Host "Son Haber Tarihi: $($Latest.date)"
Write-Host "Son Haber ID    : $($Latest.id)"
Write-Host "Son Haber Başlık: $($Latest.title)"
Write-Host "==========================================" -ForegroundColor Cyan

if ($Latest.date -eq $Today) {
    Write-Host "[OK] Bugünün haberi zaten yayınlanmış. Yeni bir içerik eklenmesine gerek yok." -ForegroundColor Green
    exit 0
} else {
    Write-Host "[UYARI] Bugün ($Today) için henüz yeni bir haber yayınlanmamış!" -ForegroundColor Yellow
    Write-Host "En son haber $($Latest.date) tarihine ait." -ForegroundColor Yellow
    
    if ($AutoTrigger) {
        Write-Host "[BİLGİ] Antigravity agentapi tetikleniyor..." -ForegroundColor Magenta
        $SidecarConfig = Join-Path $env:USERPROFILE ".gemini\config\sidecars\webierik\sidecar.json"
        if (Test-Path $SidecarConfig) {
            $Config = Get-Content $SidecarConfig -Raw -Encoding UTF8 | ConvertFrom-Json
            $Prompt = $Config.args[3]
            & agentapi new-conversation --title="Limitra Günlük Haber Telafisi ($Today)" $Prompt
            Write-Host "[OK] agentapi başarıyla tetiklendi. Antigravity yeni oturumda çalışıyor." -ForegroundColor Green
        } else {
            Write-Warning "Sidecar konfigürasyonu bulunamadı: $SidecarConfig"
        }
    } else {
        Write-Host "Haberi otomatik tetiklemek için bu komutu '-AutoTrigger' parametresiyle çalıştırabilirsiniz:" -ForegroundColor Gray
        Write-Host "powershell -File scripts/check-daily-news.ps1 -AutoTrigger" -ForegroundColor Gray
    }
}
