import React from "react"
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'

const counterAtom = atom({
    key: 'simpleCounter',
    default: 0,
})

const Count = () => {
    const count = useRecoilValue(counterAtom)
    return <h4>{count}</h4>
}

function Counter() {
    const setCount = useSetRecoilState(counterAtom)
    return (
        <>
            <h2>useRecoilValue and useSetRecoilState Counter</h2>
            <Count />
            <button onClick={() => setCount((count) => count - 1)}>-</button>
            <button onClick={() => setCount((count) => count + 1)}>+</button>
        </>
    )
}

export default function UseRecoilValueCounterDemo() {
    return (
        <RecoilRoot>
            <Counter />
        </RecoilRoot>
    )
}