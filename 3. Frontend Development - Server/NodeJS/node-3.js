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
// Save the File
const fs = require("fs");

http.createServer(function (req, res) {
    // Parse the Uploaded File
    if (req.url == "/fileupload") {
        let form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            let oldpath = files.filetoupload.filepath;
            let newpath = "C:/Users/ronaz/Desktop/" + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write("File uploaded and moved!");
                res.end();
            })
        });
    } else {
        res.writeHead(200, {"Content-Type": "text/html"});

        // Create an Upload Form
        res.write("<form action='fileupload' method='post' enctype='multipart/form-data'>");
        res.write("<input type='file' name='filetoupload'><br>");
        res.write("<input type='submit'>");
        res.write("</form>");
        return res.end();
    }
// The server object listens to port 8080
}).listen(8080);


/* Nodeemailer Module sends email from your computer */
const nodeemailer = require("nodemailer");

// Send an Email
let transporter = nodeemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ronazong@gmail.com",
        pass: "password"
    }
});

// Multiple Receivers
let mailOptions = {
    from: "ronazong@gmail.com",
    to: "ronazong.work@gmail.com, ronazong.educ@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
    // Send HTML
    html: "<h1>Welcome</h1><p>That was easy!</p>"
};

transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log("Email sent: " + info.response);
    }
})

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