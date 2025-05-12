@echo off
echo Cleaning up node_modules and package-lock.json...
rmdir /s /q node_modules
del package-lock.json

echo Installing dependencies...
npm install

echo Setup complete! You can now run the project with:
echo npm run dev
