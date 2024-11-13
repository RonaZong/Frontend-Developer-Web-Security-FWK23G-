import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
