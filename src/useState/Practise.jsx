import React from 'react'
import { useState } from 'react'

function Practise() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        if (count > 0)
            setCount(count - 1)
    }
    function reset() {
        setCount(0)
    }

    return (
        <>
            <p style={{ color: "red" }}>count:{count}</p>
            <button style={{ background: "green" }} onClick={increment}>Add</button >
            <button style={{ background: "violet" }} onClick={decrement}>Subtract</button>
            <button onClick={reset}>reset</button>
        </>
    )
}

export default Practise
