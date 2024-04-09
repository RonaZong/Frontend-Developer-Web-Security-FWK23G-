import { useState } from "react";

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>So you were probablt born in {bornYear()}</p>
    </div>
  );
};

const Display = ({ counter }) => <div>{counter}</div>;

const App = () => {
  const name = "Peter";
  const age = 10;

  const [counter, setCounter] = useState(0);
  setTimeout(() => setCounter(counter + 1), 1000);

  console.log("rendering...", counter);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />

      <Display counter={counter} />
    </div>
  );
};

export default App;
