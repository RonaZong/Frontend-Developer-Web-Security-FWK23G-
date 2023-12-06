const http = require("http");

// Own Modules
// Use module in modules.js
const dt = require("./modules.js");

// NPM
const uc = require("upper-case");
// import * as uc from "upper-case";

// dt.message();
console.log(dt.dateTime());

dt.warn("Achtung!");

dt.printNameIfPasswordIsCorrect("Rona", "QWERT123");

console.log(dt.person.age);

console.log(dt.sum(1999, 24));

console.log(dt.names);

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
        
    res.write("The date and time are currently: " + dt.dateTime() + "\n");

    res.write(uc.upperCase("Hello World!"));
    
    res.end();
    
}).listen(8080);


// ES6 Modules
// package.json
// "type": "module",

import * as dt from "./modules.js";
dt.warn("Achtung!");





