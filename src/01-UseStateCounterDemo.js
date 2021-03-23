import React, { useState } from "react"

const Count = ({ count }) => {
    return <h4>{count}</h4>
}

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <h2>useState Counter</h2>
            <Count count={count} />
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}

export default function UseStateCounterDemo() {
    return <Counter />
}