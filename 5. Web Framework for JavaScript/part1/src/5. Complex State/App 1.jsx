import { useState } from "react";

const App = () => {
  const [alternative, setAlternative] = useState("Okastrerad");

  return (
    <form>
      <div>
        <label>Okastrerad</label>
        <input
          type="radio"
          checked={alternative === "Okrasterad"}
          onChange={() => setAlternative("Okastrerad")}
        />
      </div>
      <div>
        <label>Kastrerad</label>
        <input
          type="radio"
          checked={alternative === "Kastrerad"}
          onChange={() => setAlternative("Kastrerad")}
        />
      </div>
      <div>
        <label>Kemiskt Kastrerad</label>
        <input
          type="radio"
          checked={alternative === "Kemiskt Kastrerad"}
          onChange={() => setAlternative("Kemiskt Kastrerad")}
        />
      </div>
      <p>{alternative}</p>
    </form>
  );
};

export default App;