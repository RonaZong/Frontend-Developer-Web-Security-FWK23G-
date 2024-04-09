import { useState } from "react";

function Display({ nr }) {
  return <div>{nr}</div>;
}

function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

function Knappar() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const zero = () => setCount(0);

  return (
    <>
      <Display nr={count} />
      <Button onClick={increase} text="plus" />
      <Button onClick={decrease} text="minuz" />
      <Button onClick={zero} text="zero" />
    </>
  );
}

export default Knappar;