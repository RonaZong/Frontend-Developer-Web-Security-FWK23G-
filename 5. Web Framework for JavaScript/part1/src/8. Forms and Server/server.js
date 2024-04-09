import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

let notes = [
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

/*
const replace = (notes, id, data) => {
  const newNotes = [];
  let foundNote = null;
  notes.forEach((note) => {
    if (note.id === id) {
      newNotes.push({ ...note, ...data });
      foundNote = { ...note, ...data };
    } else {
      newNotes.push(note);
    }
  });
  notes = newNotes;
  return foundNote;
};
*/

const replace = (notes, id, data) => {
  let foundNote = null;
  notes = notes.map((note) => {
    if (note.id === id) {
      foundNote = { ...note, ...data };
      return { ...note, ...data };
    } else {
      return note;
    }
  });
  return foundNote;
};

app.get("/notes", (req, resp) => {
  resp.json(notes);
});

app.delete("/notes/:id", (req, resp) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);
  resp.sendStatus(200);
});

app.put("/notes/:id", (req, resp) => {
  const id = Number(req.params.id);
  const changedNote = req.body;
  const foundNote = replace(notes, id, changedNote);
  if (foundNote !== null) {
    resp.status(200).json(foundNote); // OK
  } else {
    resp.sendStatus(404); // Not Found
  }
});

app.post("/notes", (req, resp) => {
  const note = req.body;
  notes.push(note);
  resp.status(201).json(notes);
});

app.listen(3000, () => console.log("listeing on port 3000"));