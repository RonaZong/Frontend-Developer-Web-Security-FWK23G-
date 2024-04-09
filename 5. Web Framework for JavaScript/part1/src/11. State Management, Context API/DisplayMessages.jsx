function DisplayMessages({ messages }) {
    return (
      <ul>
        {messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>
    );
  }
  
  export default DisplayMessages;