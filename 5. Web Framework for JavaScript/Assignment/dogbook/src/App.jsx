import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Profile from "../../../dogbook/src/profile";
import Create from "../../../dogbook/src/create";

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
      <h3>Dogs</h3>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <Link to={`/profile/${dog.id}`}>{dog.name}</Link>
            <button onClick={() => removeDog(dog.id)}>x</button>
          </li>
        ))}
      </ul>
      <Link to={`/create`}>Create</Link>
    </div>
  );
}

export default App;
