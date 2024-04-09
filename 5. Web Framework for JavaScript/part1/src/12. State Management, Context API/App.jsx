// // 3. Konsumera value från context
// import { useContext } from "react";
// import { MyContext, FunctionContext } from "./main";

// function App() {
//   return (
//     <>
//       <Comp />
//     </>
//   );
// }

// function Comp() {
//   const contextValue = useContext(MyContext);
//   const functionValue = useContext(FunctionContext);
//   return (
//     <>
//       <p>{contextValue}</p>
//       <button onClick={functionValue}>Click me</button>
//     </>
//   );
// }

// export default App;

// 3. Konsumera value från context
import { useContext, createContext, useState } from "react";

const StateContext = createContext();

function App() {
  const [name, setName] = useState("Benjamnin Netyanho");

  return (
    <div>
      <StateContext.Provider value={{ name, setName }}>
        <Comp1 />
        <Comp2 />
      </StateContext.Provider>
    </div>
  );
}

function Comp1() {
  const { setName } = useContext(StateContext);
  return (
    <>
      <button onClick={() => setName("Benjamin Cahoon")}>Click me</button>
    </>
  );
}

function Comp2() {
  const { name } = useContext(StateContext);
  return <div>{name}</div>;
}

export default App;