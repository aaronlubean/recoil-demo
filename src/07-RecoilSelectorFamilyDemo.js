import React from "react"
import { atom, selectorFamily, useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'

const counterAtom = atom({ key: 'counter', default: 0 })

const multiplyBySelectorFamily = selectorFamily({
    key: 'MultiplyByNumber',
    get: (multiplier) => ({get}) => {
        return get(counterAtom) * multiplier
    }
})

function Counter() {
    const [count, setCount] = useRecoilState(counterAtom)
    const x10 = useRecoilValue(multiplyBySelectorFamily(10))
    const x50 = useRecoilValue(multiplyBySelectorFamily(50))
    const x100 = useRecoilValue(multiplyBySelectorFamily(100))
    return (
        <>
            <h4>{count}</h4>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h3>x10: {x10}</h3>
            <h3>x50: {x50}</h3>
            <h3>x100: {x100}</h3>
        </>
    )
}

export default function RecoilSelectorFamilyDemo() {
    return (
        <RecoilRoot>
            <h2>Recoil selectorFamily Counter with Multipliers</h2>
            <Counter/>
        </RecoilRoot>
    )
}