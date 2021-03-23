import React, { useState, createContext, useContext } from 'react'

const SummaryContext = createContext()
function SummaryProvider({ children }) {
    const [pluses, setPluses] = useState(0)
    const [minuses, setMinuses] = useState(0)
    const context = { pluses, setPluses, minuses, setMinuses }
    return <SummaryContext.Provider value={context}>{children}</SummaryContext.Provider>
}

function CounterSummary() {
    const { pluses, minuses } = useContext(SummaryContext)
    return <h3>Summary &mdash; Pluses: {pluses} &ndash; Minuses: {minuses}</h3>
}

function Counter() {
    const { setPluses, setMinuses } = useContext(SummaryContext)
    const [count, setCount] = useState(0)
    const decrement = () => {
        setCount(c => c - 1)
        setMinuses(m => m + 1)
    }
    const increment = () => {
        setCount(c => c + 1)
        setPluses(p => p + 1)
    }
    return (
        <div style={{marginRight: "15px"}}>
            <h4>{count}</h4>
            <button onClick={() => decrement()}>-</button>
            <button onClick={() => increment()}>+</button>
        </div>
    )
}

export default function ReactContextCountersDemo() {
    
    return (
        <SummaryProvider>
            <h2>React Context Counters</h2>            
            <CounterSummary />
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
            </div>
        </SummaryProvider>
    )
}