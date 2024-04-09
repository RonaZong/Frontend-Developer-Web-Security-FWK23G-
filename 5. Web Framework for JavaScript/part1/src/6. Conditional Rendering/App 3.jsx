import { useState } from "react";

function Input({ onChange }) {
  return <input type="text" onChange={onChange} />;
}

function Button() {
  return <input type="submit" value="Spara" />;
}

function List({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

function Form({ onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <Input onChange={onChange} />
      <Button />
    </form>
  );
}

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
      <Form onSubmit={submitHandler} onChange={textHandler} />
      <List todos={todos} />
    </>
  );
}

export default App;