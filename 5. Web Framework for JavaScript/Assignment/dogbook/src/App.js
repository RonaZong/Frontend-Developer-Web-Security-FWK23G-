import logo from './logo.svg';
// import './App.css';
import { useState } from "react";

const Start = ({ setDog, setPage }) => {
  const createHandler = (dogName) => {
    return () => {
      setDog(dogName);
      setPage("Profile");
    };
  };

  return (
    <>
      <div>
        <h3>Users</h3> 
        <ul className="no-bullets">
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
      <a href="#" onClick={createHandler("New")}>
        Create new dog
      </a>
    </>
  );
};

const Profile = ({ dog, setPage }) => {
  // const address = API.get("https://dog.ceo/api/breeds/image/random");
  // console.log(address)
  return (
    <div>
      {dog}
      <img src={`https://robohash.org/${dog}?set=set4`} alt={dog} />
      <img src={`https://dog.ceo/api/breeds/image/random`.message} alt={dog} />
      <ul className="no-bullets">
        <li>Name: {dog.name}</li>
        <button>edit</button>
        <li>Nick: </li>
        <li>Age: </li>
        <li>Bio: </li>
        <li>Friend: </li>
        <li>
          <input type="checkbox" id="Present" name="Present" />
          <label for="Present">Present</label>
        </li>
      </ul>
      <button onClick={() => setPage("Start")}>Go to users</button>
    </div>
  );
};

const Edit = () => {
  return (
    <>
      <img src="" alt="" />
      <ul className="no-bullets">
        <li>Name: <input type="text" /> </li>
      </ul>
    </>
  )

}

const Create = () => {

}

const Yard = () => {};

const NoYard = () => {};

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       {/* <img src={logo} className="App-logo" alt="logo" /> */}
  //     </header>
  //     <h2>Dogbook</h2>

  //   </div>
  // );

  const [page, setPage] = useState("Start");
  const [dog, setDog] = useState(null);

  switch (page) {
    case "Start":
      // Start needs to change state on dog and page
      return <Start setDog={setDog} setPage={setPage} />;
    case "Profile":
      // Profile needs to show current dog and setPage
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