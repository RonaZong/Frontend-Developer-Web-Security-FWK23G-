/* Built-in Modules */
// Command Prompt -> node node-1.js

const http = require("http");


/* Events Module create, fire, and listen for own events */
const events = require("events");
// All event properties and methods are an instance of an EventEmitter object
const eventEmitter = new events.EventEmitter();

// Create an event handler
const eventHandler = function () {
    console.log("I hear a scream!");
}

// Assign the event handler to an event
eventEmitter.on("scream", eventHandler);

// Fire the "scream" event
eventEmitter.emit("scream");

// readStream object fires events when opening and closing a file
const rs = fs.createReadStream("./file2.txt");
rs.on("open", function() {
    console.log("The file is open");
});

/* Formidable Module uploads files */
const formidable = require("formidable");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});

    // Create an Upload Form
    res.write("<form action='fileupload' method='post' enctype='multipart/form-data'>");
    res.write("<input type='file' name='filetoupload'><br>");
    res.write("<input type='submit'>");
    res.write("</form>");

    return res.end();
// The server object listens to port 8080
}).listen(8080);

const os = require("os");
// import os from "os";

const zlib = require("zlib");
// import zlib from "zlib";

const cluster = require("cluster");
// import * as cluster from "cluster";

// if (cluster.isWorker) {
//     console.log("I am a worker");
// }
// else {
//     console.log("I am a master");
//     cluster.fork();
//     cluster.fork();
// }