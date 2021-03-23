import React from "react"
import { atomFamily, RecoilRoot, useRecoilState } from 'recoil'

const counterAtomFamily = atomFamily({ key: 'counter', default: 0 })

const Count = ({ count }) => {
    return <h4>{count}</h4>
}

function Counter({counterId}) {
    const [count, setCount] = useRecoilState(counterAtomFamily(counterId))
    return (
        <>
            <Count count={count} />
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}

export default function RecoilAtomFamilyDemo() {
    return (
        <RecoilRoot>
            <h2>Recoil atomFamily Counters</h2>
            <Counter counterId="a"/><br/><br/>
            <Counter counterId="b"/><br/><br/>
            <Counter counterId="c"/>
        </RecoilRoot>
    )
}