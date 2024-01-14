function Greeting({ name }) {
    return <h1>Hello, {name}</h1>;
}

export default function App() {
    return <Greeting name="world" />
}

function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}