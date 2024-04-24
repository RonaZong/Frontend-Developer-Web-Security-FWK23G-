import { useState } from "react";
import Create from "./create";

const initialDogbook = [
    {id: 0, name: "Dog1",},
    {id: 1, name: "Wolverine"},
    {id: 2, name: "Lassie"}
]

const Start = ({ setDog, setPage }) => {
  const [dog] = useState(null);


  const createHandler = (dogName) => {
    return () => {
      setDog(dogName);
      setPage("Profile");
    };
  };

  const createNew = () => {
    return <Create dog={dog} setPage={setPage} />;
  };

  // function handleAddDog(text) {
  //   dispatch({
  //     type: 'added',
  //     id: nextId++,
  //     text: text,
  //   });
  // }
  
  // function handleChangeDog(task) {
  //   dispatch({
  //     type: 'changed',
  //     task: task,
  //   });
  // }
  
  // function handleDeleteDog(taskId) {
  //   dispatch({
  //     type: 'deleted',
  //     id: taskId,
  //   });
  // }

  return (
    <>
      <div>
        <h3>Users</h3>
        <ul className="no-bullets">
          <li>
            <a href="#" onClick={createHandler("Dog1")}>
              @Dog1
            </a>
            <button>x</button>
          </li>
          <li>
            <a href="#" onClick={createHandler("Wolverine")}>
              @Wolverine
            </a>
            <button>x</button>
          </li>
          <li>
            <a href="#" onClick={createHandler("Lassie")}>
              @Lassie
            </a>
            <button>x</button>
          </li>
        </ul>
      </div>
      <div>
        <a href="#" onClick={createNew()}>
          Create new dog
        </a>
      </div>
    </>
  );
};

export default Start;
