import { useState } from "react";
import AddMessage from "./AddMessage";
import DisplayMessages from "./DisplayMessages";

function App() {
  const [messages, setMessages] = useState([]);
  return (
    <>
      <AddMessage setMessages={setMessages} />
      <DisplayMessages messages={messages} />
    </>
  );
}

export default App;