import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const parts = [
    { name: "Maths", duration: "2 months" },
    { name: "Photo", duration: "1 month" },
    { name: "Sewing", duration: "6 months" },
  ];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div><p>Hello World</p></div>

      <div>
          <Header />
          <Content parts={parts} />
          <Footer />
      </div>
    </>
  )
}

const Header = () => {
    return <div>Header</div>;
};

const Part = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.duration}</p>
        </div>
    );
};

const Content = (props) => {
    const part1 = props.parts[0];
    const part2 = props.parts[1];
    const part3 = props.parts[2];
    return (
        <>
            <Part name={part1.name} duration={part1.duration} />
            <Part name={part2.name} duration={part2.duration} />
            <Part name={part3.name} duration={part3.duration} />
        </>
    );
};

const Footer = () => {
    return <div>Footer</div>;
};

export default App