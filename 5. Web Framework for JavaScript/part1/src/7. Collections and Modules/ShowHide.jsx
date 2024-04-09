import { useState } from "react";

const Dog = ({ visible }) => {
  if (visible) {
    return <img src="dog.png" height="300px" width="200px" />;
  } else {
    return null;
  }
};

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>
      <Dog visible={show} />
    </div>
  );
};

export default ShowHide;