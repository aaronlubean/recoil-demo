import React from "react"
import { atom, RecoilRoot, useRecoilState } from 'recoil'

const counterAtom = atom({ key: 'counter', default: 0 })

const Count = ({ count }) => {
    return <h4>{count}</h4>
}

function Counter() {
    const [count, setCount] = useRecoilState(counterAtom)
    return (
        <>
            <h2>useRecoilState Counter</h2>
            <Count count={count} />
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}

export default function UseRecoilStateCounterDemo() {
    return (
        <RecoilRoot>
            <Counter />
        </RecoilRoot>
    )
}