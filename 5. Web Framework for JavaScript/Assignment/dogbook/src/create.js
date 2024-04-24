import { useState } from "react";
const Create = () => {
  const [pic, setPic] = useState("dog.jpg");

  //   setDogbook([...dogbooks, { id: nextId++, text: text, done: false }]);
  return (
    <div>
      <ul className="no-bullets">
        <li>
          Name: <input type="text" />
        </li>
        <li>
          Nick: <input type="text" />
        </li>
        <li>
          Age: <input type="number" />
        </li>
        <li>
          Bio: <input type="text" />
        </li>
        <li>
          Friend: <input type="text" />
        </li>
        <li>
          <input type="checkbox" id="Present" name="Present" />
          <label for="Present">Present</label>
        </li>
      </ul>
      <button type="submit">Save</button>
      {/* <button onClick={() => setPage("Start")}>Go to users</button> */}
    </div>
  );
};

export default Create;
// const Button = ({ handler, text }) => {
//   return <button onClick={handler}>{text}</button>;
// };
//   return (
//     <div>
//       <img src={pic} />
//       <Button handler={() => setPic("dog.jpg")} text="hund" />
//       <Button handler={() => setPic("cat.jpg")} text="katt" />
//     </div>
//   );
