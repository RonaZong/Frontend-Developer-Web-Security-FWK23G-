const http = require("http");
const fs = require("fs").promises;

const host = "localhost";
const port = 8000;

const people = JSON.stringify([
    {name: "Rona", age: 24},
    {name: "Wyn", age: 24}
])

const books = JSON.stringify([
    {title: "Ronja Rövardotter", author: "Astrid Lindgren"},
    {title: "Bible", author: "God"}
])

const requestListener = async(request, response) => {

    try{
        // response.setHeader("Content-Type", "application/json");
        // response.end(`{"name": "Rona", "gender": "female"}`);
        switch (request.url) {
            case "people":
                response.writeHead(200);
                response.end(people);
            case "books":
                response.writeHead(200);
                response.end(books);
            default:
                response.writeHead(404);
                response.end(`Not Found`);
                break;
        };

        const content = await fs.readFile("./node-4.html");
        response.setHeader("Content-Type", "text/html");
        response.writeHead(200);
        response.end(content);
        // response.end(`
        // <html lang="en">
        //     <head>
        //         <meta charset="UTF-8">
        //         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        //         <link rel="stylesheet" href="" />
        //         <title></title>
        //         <script src="node-4.js"></script>
        //     </head>
        //     <body>
        //         <h1>Server</h1>
        //         <img src="https://i.ytimg.com/vi/hRAR3N0RCPQ/maxresdefault.jpg">
        //     </body>
        // </html>
        // `);
    } catch (err) {
        response.writeHead(404);
        response.end(`Not Found`);
    }
    
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

// Terminal
// curl http://localhost:8000

// Insomnia
// GET http://localhost:8000


