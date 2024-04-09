import { useState, useEffect } from "react";
import axios from "axios";

const Text = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});

  const [dummy, setDummy] = useState("");

  useEffect(() => {
    const main = async () => {
      const resp = await axios.get("http://localhost:3000/");
      setData(resp.data); // { id, message }
    };
    main();
  }, [dummy]);

  const sendInput = async (evt) => {
    evt.preventDefault();
    setDummy(" ");
    await axios.put(`http://localhost:3000/${data.id}`, { message: input });
  };

  const changeInput = (evt) => {
    setInput(evt.target.value);
  };

  return (
    <>
      <div>{data.message}</div>
      <form onSubmit={sendInput}>
        <input type="text" onChange={changeInput} />
        <input type="submit" value="skicka" />
      </form>
    </>
  );
};

export default Text;