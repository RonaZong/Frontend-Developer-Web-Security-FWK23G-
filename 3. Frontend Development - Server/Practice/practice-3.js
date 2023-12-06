// npm install express
// npm install body-parser
// node node-7.js

// npm install nodemon --save-dev
// "scripts": {
//     "develop": "nodemon node-7.js",
//     "test": "echo \"Error: no test specified\" && exit 1"
// }
// npm run develop

// "type": "module"

// import express from "express";

// import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

let idCount = 0;

let todos = [
    {id: ++idCount, todo: "But Milk", status: "urgent", active: true},
    {id: ++idCount, todo: "Fix Car", status: "urgent", active: false},
    {id: ++idCount, todo: "Pickup Delivery", status: "normal", active: true},
    {id: ++idCount, todo: "Invite Friends to Party", status: "light", active: false}
];

app.get("/todos", (request, response) => {
    console.log(request);
    response.json(todos);
});

app.get("/todos/:id", (request, response) => {
    const id = parseInt(request.params.id);
    for (let todo of todos) {
        if(todo.id === id) {
            response.json(todo);
        }
    }
    response.status(404).end();
});

app.post("/todos", (request, response) => {
    const todo = request.body;
    if (todo.todo === undefined || todo.status === undefined || todo.active === undefined) {
        response.status(400).end();
    } else {
        todo.id = ++idCount;
        todos.push(todo);
    }

    response.status(201).end(`/todos/${todo.id}`);
});

app.put("/todos/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const data = request.body;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos[i] = {...todos[i], ...data};
            response.status(200).end();
        }
    }
    response.status(404).end();
});

app.delete("/todos/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const newTodos = [];
    let found = dalse;
    todos.forEach((todo) => {
        if (todo.id !== id) {
            newTodos.push(todo);
        } else {
            found = true;
        }
    });

    todos = newTodos;
    if (found) {
        response.status(200).end();
    } else {
        response.status(404).end();
    }
});

app.listen(3344, () => {
    console.log("Started server on localhost:3344");
});
