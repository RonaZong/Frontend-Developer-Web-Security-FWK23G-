/* Built-in Modules */
// Command Prompt -> node node-2.js

const http = require("http");

/* File System Module: read, create, update, delete, rename files */
const fs = require("fs");

http.createServer(function (request, response) {
    let q = url.parse(request.url, true);

    let filename = "." + q.pathname; // /node-1.html
    
    fs.readFile(filename, function(err, data) {
        if (err) {
            response.writeHead(404, {"Content-Type": "text/html"});
            return response.end("404 Not Found");
        }

        response.writeHead(200, {"Content-Type": "text/html"});
    
        response.write(data);

        /* Create & Update Files */
        // appendFile() method appends specified content to a file
        fs.appendFile("file1.txt", "If the file does not exist, the file will be created", function (err) {
            // if (err) throw err;
            console.log("Saved");
        });
        fs.appendFile("file1.txt", "If the file exists, appends the specified content at the end of the specified file.", function (err) {
            // if (err) throw err;
            console.log("Updated");
        });

        // open() method takes a flag as second argument, w for writing, the specified file is opened for writing
        // If the file does not existl an empty file is created
        fs.open("file2.txt", "w", function(err, file) {
            // if (err) throw err;
            console.log("Saved");
        });

        // writeFile() method replaces the specified file and content if it exits
        fs.writeFile("file3.txt", "If the file does not exist, a new file, containing the specified contect, will be created", function (err) {
            // if (err) throw err;
            console.log("Saved");
        });
        fs.writeFile("file3.txt", "If the file exists, replace the content of the file", function (err) {
            // if (err) throw err;
            console.log("Updated");
        });

        /* Delete Files */
        // unlink() method deletes the specified file
        fs.unlink("file1.txt", function (err) {
            // if (err) throw err;
            console.log("Deleted");
        });

        /* Rename Files */
        fs.rename("file2.txt", "file1.txt", function (err) {
            // if (err) throw err;
            console.log("Renamed");
        });
        
        // End the response
        return response.end();
    })

// The server object listens to port 8080
}).listen(8080);