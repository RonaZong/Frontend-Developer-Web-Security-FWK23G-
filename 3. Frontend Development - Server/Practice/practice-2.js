/*

Exercise 1: Basic HTTP Server

Skapa en enkel HTTP-server som lyssnar på port 3000 och svarar med "Hello, World!"
när den nås via en webbläsare.
​
Testa din server genom att öppna en webbläsare och navigera till http://localhost:3000. 
Du borde se "Hello, World!" visas på sidan.

*/

/*
Exercise 2: Serving HTML Content

Utöka föregående övning för att visa en HTML-sida istället 
för vanlig text. Skapa en HTML-fil (t.ex. index.html) och 
modifiera din server så att den läser och skickar innehållet 
i denna HTML-fil när den öppnas.

I den här övningen, se till att din HTML-fil (index.html) finns i
samma katalog som ditt Node.js-skript. Alltå 2 filer i samma mapp

mapp/
* main.js
* index.html

Testa din server genom att
navigera till http://localhost:3000 i en webbläsare.

*/

/* Excercise 3: Extend Server (DEMO routes, formulär data, static assets)

Utforska gärna mer komplexa övningar genom att lägga till 
funktioner som hantering av olika "routes" ("/", "/sida1.html", 
"/sida2.html"), bearbetning av formulärdata eller servering av 
statiska tillgångar.

*/

/*
Exercise 4: Handling Different Request Methods

Ändra din server för att hantera olika HTTP-begäransmetoder (GET, POST, etc.) 
och svara därefter. Svara till exempel med ett annat meddelande för 
GET- och POST-förfrågningar.

Testa din server genom att använda verktyg som curl eller Postman för att göra 
både GET- och POST-förfrågningar till http://localhost:3000.

*/

const http = require("http");
const host = "localhost";
const port = 3000

const fs = require("fs").promises; // async

const page1 = JSON.stringify([
    {name: "Rona", age: 24},
    {name: "Wyn", age: 24}
]);

const page2 = JSON.stringify([
    {}
])


const requestListener = async(request, response) => {
    // try{
        // response.setHeader("Content-type", "text/html");
        // response.writeHead(200);
        // response.end("Hello, World!");
        // const content = await fs.readFile("./node6.html");
        // response.end(content);
    // } catch (err) { 
    //     response.writeHead(404);
    //     response.end(`Not Found`);
    // }

    response.setHeader("Content-type", "application/json");
        switch (request.url) {
            case "/":
                response.writeHead(200);
                response.end();
                break;
            case "/page1":
                response.writeHead(200);
                response.end(page1);
                break;
            case "/page2":
                response.writeHead(200);
                response.end(page2);
                break;
            default:
                response.writeHead(404);
                response.end(JSON.stringify({error: "Resource not found"}));
                break;
        }   
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})

/*
Exercise 5: Responding with JSON

Utöka din server för att svara med JSON-data. Skapa till exempel en slutpunkt 
som returnerar ett JSON-objekt som innehåller information om en användare.

Testa din server genom att göra en GET-förfrågan till http://localhost:3000/user. 
Du bör få ett JSON-svar som innehåller användarinformation.
*/