@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 20 or later is required.
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found. Install Node.js with npm included.
  exit /b 1
)

if not exist package.json (
  echo package.json was not found in the project directory.
  exit /b 1
)

if not exist package-lock.json (
  echo package-lock.json was not found; refusing to install without the lockfile.
  exit /b 1
)

echo Installing dependencies from package-lock.json...
call npm ci
if errorlevel 1 (
  echo Dependency installation failed. Check the error above.
  exit /b 1
)

echo Dependencies installed successfully.
exit /b 0
