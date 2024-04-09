import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createContext } from "react";

const MyContext = createContext();
const FunctionContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContext.Provider value="Bonjour">
    <FunctionContext.Provider value={() => console.log("hello world")}>
      <App />
    </FunctionContext.Provider>
  </MyContext.Provider>
);

export { MyContext, FunctionContext };