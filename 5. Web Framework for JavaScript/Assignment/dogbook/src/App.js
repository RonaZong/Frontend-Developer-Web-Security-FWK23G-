import { useState } from "react";
import Start from "./start";
import Profile from "./profile";
import Edit from "./edit";
import Create from "./create";
// import './App.css';

function App() {
  const [page, setPage] = useState("Start");
  const [dog, setDog] = useState(null);

  switch (page) {
    case "Start":
      // Start needs to change state on dog and page
      return <Start setDog={setDog} setPage={setPage} />;
    case "Profile":
      // Profile needs to show current dog and setPage
      return <Profile dog={dog} setPage={setPage} />;
    case "Edit":
      // Edit needs to allow editing current dog and setPage
      return <Edit dog={dog} setPage={setPage} />;
    case "Create":
      // Create needs to create a new dog and setPage
      return <Create dog={dog} setPage={setPage} />;
    default:
      return <Start />;
  }
}
// Auto import
// Shift + Alt + down = copy
export default App;
