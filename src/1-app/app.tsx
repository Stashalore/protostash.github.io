import { useState } from "react";

export function Main()
{
    const [count, setCount] = useState(0);

    return <div>
        <h1>Stashalore</h1>
        <button onClick={() => setCount(count => count + 1)}>You clicked {count} times</button>
    </div>;
}