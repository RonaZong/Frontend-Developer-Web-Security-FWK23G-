import React from "react";
import { ReactDOM } from "react-dom";

/* 1. Make a component Hello that says your name */
/* 2. Make the Hello component receive name and age in props and
         prints out your name and the year you were born <div>Patrick 1982</div>
*/
const Hello = ({ name, age }) => (
  <div>
    {name} {new Date().getFullYear() - age}
  </div>
);

/* 3. Make a component BacksteetBoys component that renders a list of backstreetboys members
         <ul>
           <Member name="Nick <3" /> (name should be props)
         </ul>
   */
const BacksteetBoys = ({ name }) => (
  <ul>
    <Member name={name[0] + ' <3'} />
    <Member name={name[1] + ' <3'} />
    <Member name={name[2] + ' <3'} />
    <Member name={name[3] + ' <3'} />
  </ul>
);
/* 4. Add 4 Member components (Nick, AJ, Kevin, Brian) and put them inside the BackstreetBoys component
     i.e: <ul>
             <Member name="Nick <3" />
             <Member name="AJ <3" />
             <Member name="Kevin <3" />
             <Member name="Brian <3" />
          </ul>
   */
const Member = ({ name }) => <li>{name}</li>;

const App = () => {
  return (
    <>
      <Hello name="Xingrong" age={25} />
      <Hello name="Zhuowen" age={25} />
      <BacksteetBoys name={["Nick", "Aj", "Kevin", "Brian"]} />
    </>
  );
};

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export default App;
