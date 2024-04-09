import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // sätter policies som behövs för externa anrop

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/notes", (req, resp) => {
  resp.json(notes);
});

app.listen(3000, () => console.log("listeing on port 3000"));