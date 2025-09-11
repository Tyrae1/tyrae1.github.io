import {useState} from "react";
import Greeting from "./components/Greeting";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <main>
            <h1>Hello, React + Vite</h1>
            <Greeting name="John"/>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(c => c+1)}>+1</button>
        </main>
    )
}


