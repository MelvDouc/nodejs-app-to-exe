# Convert Node.js app to executable
## Dependencies
Might not work if not installed globally.
```
npm i -g pkg
```

## Syntax
Project must be written using **pre-ES6 syntax**. Anything more recent will likely cause compilation to fail.

## package.json
```json5
"bin": "index.js", // main file
"scripts": {
  "test": "node index.js",
  "build": "pkg index.js --output build/budget-calculator.exe --targets node16-win-x64"
},
"pkg": {
  "scripts": "utils/*.js", // module folder
  "targets": "node16-win-x64" // your OS and Node version
}
```