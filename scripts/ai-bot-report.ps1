# AI bot ziyaret raporu: VPS'teki limitra-ai-bots.log (nginx, haftalik rotasyon) uzerinden
# bot dagilimi ve en cok cekilen sayfalar. Kullanim: npm run report:bots
[CmdletBinding()]
param(
    [string]$Server = "89.252.153.119",
    [string]$User = "ubuntu",
    [string]$KeyPath = "$env:USERPROFILE\.ssh\muhasebedemo_deploy"
)
$bots = 'GPTBot|OAI-SearchBot|ChatGPT-User|ClaudeBot|Claude-SearchBot|Claude-User|PerplexityBot|Perplexity-User|Google-Extended|Applebot|meta-external|Amazonbot|CCBot|Bytespider|bingbot'
$remote = "set -e; F='/var/log/nginx/limitra-ai-bots.log'; ls -1 `$F* 2>/dev/null || { echo 'log yok (henuz deploy edilmedi?)'; exit 0; }; echo '--- bot hits ---'; sudo zcat -f `$F* | grep -oiE '$bots' | tr 'A-Z' 'a-z' | sort | uniq -c | sort -rn; echo '--- top pages ---'; sudo zcat -f `$F* | awk '{print `$7}' | sort | uniq -c | sort -rn | head -25; echo '--- status codes ---'; sudo zcat -f `$F* | awk '{print `$9}' | sort | uniq -c | sort -rn"
& ssh -i $KeyPath -o BatchMode=yes "$User@$Server" $remote
