// import { useState, useEffect } from "react";
// s
// const initialDogbook = [
//   { id: 0, name: "Dog1" },
//   { id: 1, name: "Wolverine" },
//   { id: 2, name: "Lassie" },
// ];

// const Start = ({ setDog, setPage }) => {
//   const [dogs, setDogs] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/dogs")
//       .then((res) => setDogs(res.data))
//       .catcj((err) => console.error(err));
//   }, []);

//   // const handleOnSubmit = async (e) => {
//   //   e.preventDefault();
//   //   let result = await fetch("http://localhost:5000/dog", {
//   //     method: "GET",
//   //     headers: { "Content-Type": "application/json" },
//   //   });
//   //   result = await result.json();

//   //   console.warn(result);

//   //   if (result) {
//   //     alert("Data save successfully");
//   //   }
//   // };

//   const createHandler = (dogName) => {
//     return () => {
//       setDog(dogName);
//       setPage("Profile");
//     };
//   };

//   // const createNew = () => {
//   //   return <Create dog={dog} setPage={setPage} />;
//   // };

//   // function handleAddDog(text) {
//   //   dispatch({
//   //     type: 'added',
//   //     id: nextId++,
//   //     text: text,
//   //   });
//   // }

//   // function handleChangeDog(task) {
//   //   dispatch({
//   //     type: 'changed',
//   //     task: task,
//   //   });
//   // }

//   // function handleDeleteDog(taskId) {
//   //   dispatch({
//   //     type: 'deleted',
//   //     id: taskId,
//   //   });
//   // }

//   return (
//     <>
//       <div>
//         <h4>Users</h4>
//         <ul className="no-bullets">
//           <li>
//             <a href="#" onClick={createHandler("Dog1")}>
//               @Dog1
//             </a>
//             <button>x</button>
//           </li>
//           <li>
//             <a href="#" onClick={createHandler("Wolverine")}>
//               @Wolverine
//             </a>
//             <button>x</button>
//           </li>
//           <li>
//             <a href="#" onClick={createHandler("Lassie")}>
//               @Lassie
//             </a>
//             <button>x</button>
//           </li>
//         </ul>
//       </div>
//       {/* <div>
//         <a href="#" onClick={createNew()}>
//           Create new dog
//         </a>
//       </div> */}
//     </>
//   );
// };

// export default Start;
