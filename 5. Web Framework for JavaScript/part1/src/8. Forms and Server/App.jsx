import { useState } from "react";
import Note from "./Note.jsx";

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes);
//   const [input, setInput] = useState("");
//   const [showAllNotes, setShowAllNotes] = useState(true);

//   const addNote = (event) => {
//     event.preventDefault();
//     const newNote = {
//       id: notes.length + 1,
//       content: input,
//       important: Math.random() > 0.5,
//     };
//     setNotes([...notes, newNote]);
//     setInput("");
//   };

//   const addInput = (event) => setInput(event.target.value);

//   const notesToShow = showAllNotes
//     ? notes // all
//     : notes.filter((note) => note.important); // or only important

//   return (
//     <div>
//       <h1>Notes</h1>
//       <button onClick={() => setShowAllNotes(!showAllNotes)}>Show all</button>
//       <ul>
//         {notesToShow.map((note) => (
//           <Note key={note.id} note={note} />
//         ))}
//       </ul>
//       <form onSubmit={addNote}>
//         <input id="input" type="text" value={input} onChange={addInput} />
//         <input type="submit" value="spara" />
//       </form>
//     </div>
//   );
// };

// export default App;

//....Ni vet...säger carro! Fråga henne

const App = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [showAllNotes, setShowAllNotes] = useState(true);

  useEffect(() => {
    async function main() {
      const notes = await noteService.getAll();
      setNotes(notes);
    }
    main();
  }, []);

  const createId = () => {
    return Math.floor(Math.random() * 1000);
  };

  const addNote = async (event) => {
    event.preventDefault();
    const newNote = {
      id: createId(),
      content: input,
      important: Math.random() > 0.5,
    };
    const data = await noteService.create(newNote);
    setNotes(data); // frontend
    setInput("");
  };

  const addInput = (event) => setInput(event.target.value);

  const deleteNote = async (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    await noteService.remove(id);
  };

  const toggleImportance = async (id) => {
    const note = notes.find((note) => note.id === id);
    const newNote = { ...note, important: !note.important };
    const data = await noteService.change(id, newNote);
    setNotes(notes.map((note) => (note.id !== id ? note : data)));
  };

  const notesToShow = showAllNotes
    ? notes // all
    : notes.filter((note) => note.important); // or only important

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAllNotes(!showAllNotes)}>
        Show {showAllNotes ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            toggleImportance={toggleImportance}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input id="input" type="text" value={input} onChange={addInput} />
        <input type="submit" value="spara" />
      </form>
    </div>
  );
};

export default App;
