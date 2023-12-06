/* Built-in Modules */
// Command Prompt -> node node-1.js

/* HTTP module creates a server object, listens to server ports and gives a response back to the client */
const http = require("http");
// import * as http from "http";

/* URL module splits query string into readable parts */
const url = require("url");
// import * as url from "url";

// createServer() method creates an HTTP server
// req argument represents the request from the client, as an object
http.createServer(function (request, response) {

    let q = url.parse(request.url, true);
    /* 
    Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: null,
        query: [Object: null prototype] {},
        pathname: '/',
        path: '/',
        href: '/'
    } 
    */

    // Add HTTP Header
    // If response from HTTP server is supposed to be displayed as HTML
    // first argument is status code, second argument is an object obtaining response headers
    // 200 - all is OK
    response.writeHead(200, {"Content-Type": "text/html"});
    
    // Write a response to the client
    response.write("data");

    // Read Query String
    // url property of res object, holds the part of urk that comes after the domain name
    response.write(request.url + "\n\n"); // localhost:8080/node-1.html - /node-1.html

    // Split Query String
    let qdata = q.query; // [Object: null prototype] {}

    let adr = "http://localhost:8080/default.htm?year=2023&month=November";
    q = url.parse(adr, true);
    /*
    Url {
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'localhost:8080',
        port: '8080',
        hostname: 'localhost',
        hash: null,
        search: '?year=2023&month=November',
        query: [Object: null prototype] { year: '2023', month: 'November' },
        pathname: '/default.htm',
        path: '/default.htm?year=2023&month=November',
        href: 'http://localhost:8080/default.htm?year=2023&month=November'
    } 
    */
    qdata = q.query; // [Object: null prototype] {year: 2023, month: November}
    response.write(qdata.year + " " + qdata.month); // localhost:8080/?year=2023&month=November - 2023 November

    // End the response
    return response.end();

// The server object listens to port 8080
}).listen(8080);