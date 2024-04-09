import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  // ska lägga text state i todo state
  const submitHandler = (evt) => {
    evt.preventDefault();
    setTodos([...todos, text]);
  };
  // ska lägga in input i text state
  const textHandler = (evt) => {
    const input = evt.target.value;
    setText(input);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={textHandler} />
        <br />
        <input type="submit" value="Spara Todo" />
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;