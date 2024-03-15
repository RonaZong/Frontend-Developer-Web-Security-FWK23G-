const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const PORT = 8000;
const server = createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
    io.emit("chat message", "New user has joined.")
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
        console.log("message: " + msg);
    });
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});