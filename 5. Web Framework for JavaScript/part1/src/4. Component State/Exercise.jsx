import React from "react";
import { ReactDOM } from "react-dom";

/* 1. Make a component Hello that says your name */
const Hello = ({ name }) => {
  return (
    <div>
      <p>Hello {name}.</p>
    </div>
  );
};

const App = () => {
  /* 2. Make the Hello component receive name and age in props and
         prints out your name and the year you were born
        
         <Hello name="Patrik" age={41} />
        
         => <div>Patrick 1982</div>
   */

  /* 3. Make a component BacksteetBoys component that renders a list of backstreetboys members
         <ul>
           <Member name="Nick <3" /> (name should be props)
         </ul>
   */

  /* 4. Add 4 Member components (Nick, AJ, Kevin, Brian) and put them inside the BackstreetBoys component
     i.e: <ul>
             <Member name="Nick <3" />
             <Member name="AJ <3" />
             <Member name="Kevin <3" />
             <Member name="Brian <3" />
          </ul>
   */
  return <></>;
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
