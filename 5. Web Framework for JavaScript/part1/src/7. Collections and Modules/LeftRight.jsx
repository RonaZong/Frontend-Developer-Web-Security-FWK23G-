import { useState } from "react";

const List = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <p>Sorry empty</p>;
  } else if (allClicks.length === 1) {
    return <p>1 click {allClicks[0]}</p>;
  } else {
    return (
      <ul>
        {allClicks.map((click) => (
          <li>{click}</li>
        ))}
      </ul>
    );
  }
};

const ClicksCounter = ({ size }) => {
  if (size === 0) {
    return <p>Empty</p>;
  } else {
    return <p>{size}</p>;
  }
};

const LeftRight = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAllClicks] = useState([]);

  const handleLeft = () => {
    setAllClicks([...allClicks, "L"]);
    setClicks({
      ...clicks,
      left: clicks.left + 1,
    });
  };

  const handleRight = () => {
    setAllClicks([...allClicks, "R"]);
    setClicks({
      ...clicks,
      right: clicks.right + 1,
    });
  };

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeft}>Left</button>
      <button onClick={handleRight}>Right</button>
      {clicks.right}
      <br />
      <List allClicks={allClicks} />
      <ClicksCounter size={allClicks.length} />
    </div>
  );
};

export default LeftRight;