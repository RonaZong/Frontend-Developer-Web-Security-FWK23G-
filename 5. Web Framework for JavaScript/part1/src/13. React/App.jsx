import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

let dogsDB = [
  { id: 1, name: "Lassie" },
  { id: 2, name: "Charlie" },
  { id: 3, name: "Benny" },
  { id: 4, name: "Doris" },
  { id: 5, name: "Leja" },
];

function App() {
  const [dogs, setDogs] = useState(dogsDB);

  function addDog(name) {
    const id = dogs.length + 1;
    setDogs([...dogs, { id, name }]);
  }

  function removeDog(id) {
    setDogs(dogs.filter((dog) => dog.id !== id));
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dogs dogs={dogs} removeDog={removeDog} />} />
        <Route path="/profile/:id" element={<Profile dogs={dogs} />} />
        <Route path="/create" element={<Create addDog={addDog} />} />
      </Routes>
    </Router>
  );
}

function Dogs({ dogs, removeDog }) {
  return (
    <div>
      <h1>Dogs</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <Link to={`/profile/${dog.id}`}>{dog.name}</Link>
            <button onClick={() => removeDog(dog.id)}>x</button>
          </li>
        ))}
      </ul>
      <Link to="/create">Create</Link>
    </div>
  );
}

function Profile({ dogs }) {
  const id = Number(useParams().id);
  const dog = dogs.find((dog) => dog.id === id);
  return (
    <div>
      <h1>Dog Profile</h1>
      <p>{dog.name}</p>
    </div>
  );
}

function Create({ addDog }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function handleText(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addDog(text);
    navigate("/");
  }

  return (
    <div>
      <h1>Create Dog</h1>
      <form onSubmit={handleSubmit}>
        Dog name: <input type="text" onChange={handleText}></input>
        <br />
        <input type="submit" value="Spara"></input>
      </form>
    </div>
  );
}

export default App;