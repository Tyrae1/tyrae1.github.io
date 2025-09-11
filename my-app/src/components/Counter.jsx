import {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <section>
            <h2>Counter</h2>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(c => c+1)}>+1</button>
        </section>
    )
}