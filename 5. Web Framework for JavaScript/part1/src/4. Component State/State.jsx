import React from "react";
import { ReactDOM } from "react-dom";

const Header = () => <h1>Header</h1>;

const Person = (props) => {
  return (
    <li>
      {props.fname} {props.lname} {props.age}
    </li>
  );
};

const Content = () => {
  return (
    <ul>
      <Person fname="Xingrong" lname="Zong" age="24" />
      <Person fname="Zhuowen" lname="Chen" age="24" />
    </ul>
  );
};

const Footer = () => <div>Footer</div>;

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
export default App;