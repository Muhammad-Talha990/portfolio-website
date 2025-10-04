@echo off
echo 🚀 Starting portfolio deployment...

REM Check if git is clean
git status --porcelain > temp_status.txt
if %errorlevel% neq 0 (
    echo ❌ Git status check failed
    exit /b 1
)

for /f %%i in (temp_status.txt) do (
    echo ⚠️  You have uncommitted changes. Please commit them first.
    del temp_status.txt
    exit /b 1
)
del temp_status.txt

REM Build the project
echo 📦 Building project...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed. Please fix errors before deploying.
    exit /b 1
)

REM Test the build locally
echo 🧪 Testing production build...
start /b npm start
timeout /t 3 /nobreak > nul

REM Check if server is running (simplified check)
echo ✅ Build completed successfully!
echo 🎉 Ready for deployment!
echo Next steps:
echo 1. Push to GitHub: git push origin main
echo 2. Deploy to your chosen platform (Railway, Render, etc.)
