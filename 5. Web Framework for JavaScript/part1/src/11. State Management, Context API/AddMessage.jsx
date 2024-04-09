import { useState } from "react";

function AddMessage({ setMessages }) {
  const [text, setText] = useState("");

  function submitHandler(evt) {
    evt.preventDefault();
    setMessages((prev) => [...prev, text]);
    setText("");
  }

  function textHandler(evt) {
    setText(evt.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={textHandler} value={text} />
      <input type="submit" value="Spara" />
    </form>
  );
}

export default AddMessage;