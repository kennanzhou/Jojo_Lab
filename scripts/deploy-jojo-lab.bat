@echo off
setlocal
cd /d "%~dp0.."
bash "%~dp0deploy-jojo-lab.sh"
exit /b %ERRORLEVEL%
