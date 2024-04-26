import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ addDog }) => {
  const [text, setText] = useState("dog.jpg");
  const navigate = useNavigate();

  function handleText(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addDog(text);
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul className="no-bullets">
          <li>
            Name: <input type="text" onChange={handleText}/>
          </li>
          <li>
            Nick: <input type="text" onChange={handleText}/>
          </li>
          <li>
            Age: <input type="number" onChange={handleText}/>
          </li>
          <li>
            Bio: <input type="text" onChange={handleText}/>
          </li>
          <li>
            Friend: <input type="text" onChange={handleText}/>
          </li>
          <li>
            <input type="checkbox" id="Present" name="Present" />
            <label for="Present">Present</label>
          </li>
        </ul>
        <button type="submit">Save</button>
        {/* <button onClick={() => setPage("Start")}>Go to users</button> */}
      </form>
    </div>
  );
};

export default Create;
