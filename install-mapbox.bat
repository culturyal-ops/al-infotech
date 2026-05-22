@echo off
echo Installing Mapbox dependencies...
echo.

npm install mapbox-gl
npm install --save-dev @types/mapbox-gl

echo.
echo ✓ Mapbox packages installed!
echo.
echo Next steps:
echo 1. Create .env.local file (copy from .env.local.example)
echo 2. Add your Mapbox token from https://account.mapbox.com/
echo 3. Run: npm run dev
echo.
pause
