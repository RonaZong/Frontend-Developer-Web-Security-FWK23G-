import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";

import Profile from "./profile";
import Create from "./create";
// import './App.css';

const App = () => {
  const [dogs, setDogs] = useState(null);

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

const Dogs = ({ dogs, removeDog }) => {
  return (
    <div>
      <h3>Dogs</h3>
      <ul>
        {dogs.map((dog) => {
          <li>
            <Link to={`/profile/${dog.id}`}>{dog.name}</Link>
            <button onClick={() => removeDog(dog.id)}>x</button>
          </li>
        })}
      </ul>
      <Link to={`/create`}>Create</Link>
    </div>
  )
};


// Auto import
// Shift + Alt + down = copy
export default App;
