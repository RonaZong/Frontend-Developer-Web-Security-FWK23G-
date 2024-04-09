import { useState } from "react";

const Popup = ({ display }) => {
  if (display)
    return (
      <div>
        <img src="dog.jpg" />
      </div>
    );
};

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Popup display={show} />
      <button onClick={() => setShow(!show)}>Show popup</button>
    </div>
  );
};

export default App;