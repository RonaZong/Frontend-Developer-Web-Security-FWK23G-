import { useState } from "react";

function Input(props) {
  return <input type="text" onChange={props.onChange} />;
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
      <form onSubmit={submitHandler}>
        <Input onChange={textHandler} />
        <br />
        <input type="submit" value="Spara Todo" /> {/* <Button /> */}
      </form>
      <ul>
        {/* <List todos={todos} /> */}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;