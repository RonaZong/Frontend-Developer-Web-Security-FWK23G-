const fs = require("fs");

const file = fs.readFileSync("index.html", "utf8");

// fs.readFile("index.html", "utf-8")
fs.appendFileSync("index.html", "")
fs.appendFile("index.html", "hi", function (err) {
    console.log("finished writing");
});
console.log(file);
// console.log("finished program");

// (sudo) npm install -g matrix-rain (global)
// then use powershell
// Get-ExecutionPolicy
// Set-ExecutionPolicy RemoteSigned
// matrix-rain -d h  horizontal direction
// matrix-rain -h   help

// npm install upper-case (local)