// import { useState } from "react";

// const Edit = ({dog, setPage}) => {
//   const [name, setName] = useState();
//   const [nick, setNick] = useState();
//   const [age, setAge] = useState();
//   const [bio, setBio] = useState();
//   const [friend, setFriend] = useState();

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     let result = await fetch("http://localhost:5000/dog", {
//       method: "POST",
//       body: JSON.stringify({ name, nick, age, bio }),
//       headers: { "Content-Type": "application/json" },
//     });
//     result = await result.json();

//     console.warn(result);

//     if (result) {
//       alert("Data save successfully");
//       setName("");
//       setNick("");
//       setAge();
//       setBio();
//     }
//   };

//   return (
//     <>
//       <img src="" alt="" />
//       <form action="">
//         <ul className="no-bullets">
//           <li>
//             Name:{" "}
//             <input
//               type="text"
//               placeholder="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </li>
//           <li>
//             Nick:{" "}
//             <input
//               type="text"
//               placeholder="nick"
//               value={nick}
//               onChange={(e) => setNick(e.target.value)}
//             />
//           </li>
//         </ul>
//       </form>
//     </>
//   );
// };

// export default Edit;
