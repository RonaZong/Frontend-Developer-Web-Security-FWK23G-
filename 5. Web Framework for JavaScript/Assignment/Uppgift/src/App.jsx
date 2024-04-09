import { useState } from "react";

const Start = ({ setDog, setPage }) => {
  const createHandler = (dogName) => {
    return () => {
      setDog(dogName);
      setPage("Profile");
    };
  };

  return (
    <div>
      <ul>
        <li>
          <a href="#" onClick={createHandler("Dog1")}>
            Dog1
          </a>
        </li>
        <li>
          <a href="#" onClick={createHandler("Wolverine")}>
            Wolverine
          </a>
        </li>
        <li>
          <a href="#" onClick={createHandler("Lassie")}>
            Lassie
          </a>
        </li>
      </ul>
    </div>
  );
};

const Profile = ({ dog, setPage }) => {
  return (
    <div>
      {dog}
      <button onClick={() => setPage("Start")}>Gå tillbaka</button>
    </div>
  );
};

function App() {
  const [page, setPage] = useState("Start");
  const [dog, setDog] = useState(null);

  switch (page) {
    case "Start":
      // Start behöver ändra state på dog och page
      return <Start setDog={setDog} setPage={setPage} />;
    case "Profile":
      // Profile behöver visa aktuell dog och setPage
      return <Profile dog={dog} setPage={setPage} />;
    default:
      return <Start />;
  }
}

export default App;

// import { useState } from "react";

// const Button = ({ handler, text }) => {
//   return <button onClick={handler}>{text}</button>;
// };

// function App() {
//   const [pic, setPic] = useState("dog.jpg");

//   return (
//     <div>
//       <img src={pic} />
//       <Button handler={() => setPic("dog.jpg")} text="hund" />
//       <Button handler={() => setPic("cat.jpg")} text="katt" />
//     </div>
//   );
// }

// export default App;