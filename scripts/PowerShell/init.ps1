#configs
$psDir=[System.Environment]::CurrentDirectory 
set-alias his get-history
$HistoryFilePath = Join-Path ([Environment]::GetFolderPath('UserProfile')) .ps_history
Register-EngineEvent PowerShell.Exiting -Action { Get-History | Export-Clixml $HistoryFilePath } | out-null
if (Test-path $HistoryFilePath) { Import-Clixml $HistoryFilePath | Add-History }
# if you don't already have this configured...
Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward


function WriteLine($arg0){return write-host $arg0  -foreground Green}
function pow([double]$num0,[int]$num1){ return [math]::pow($num0,$num1)}
function json($str){return   ConvertFrom-Json -InputObject $str }
[void][reflection.assembly]::LoadFile("C:\Data\Github\AlexXieBrain\packages\Newtonsoft.Json.9.0.1\lib\net45\Newtonsoft.Json.dll")
[void][reflection.assembly]::LoadFile("C:\Data\Github\AlexXieBrain\AlexXieBrain\bin\Release\AlexXieBrain.dll")
#[void][reflection.assembly]::LoadFile("C:\Data\Github\AlexXieBrain\packages\Microsoft.AspNet.Mvc.5.2.3\lib\net45\System.Web.Mvc.dll")
$L=New-Object AlexXieBrain.LogCore
$F=New-Object AlexXieBrain.FileCore
$S=New-Object AlexXieBrain.SpiderCore
$T=New-Object AlexXieBrain.TaskCore
$D=New-Object AlexXieBrain.DrawCore
$Test=New-Object AlexXieBrain.TestCore
$SL=[AlexXieBrain.LogCore]
