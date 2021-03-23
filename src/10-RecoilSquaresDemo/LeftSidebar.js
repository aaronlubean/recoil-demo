import React from 'react'
import {useSetRecoilState} from 'recoil'
import {elementsState} from './RecoilSquaresDemo'
import {Sidebar} from './ui'

export const LeftSidebar = () => {
    const setElements = useSetRecoilState(elementsState)

    const insertSquares = (numOfSquares) => {
        const addRectangleButton = document.getElementById("add-rectangle-button")
        let i = 0
        const interval = setInterval(() => {
            addRectangleButton?.click()
            i++
            if (i >= numOfSquares) {
                clearInterval(interval)
            }
        }, 1)
    }

    return (
        <Sidebar>
            <h2>Recoil Atoms</h2>
            <button id="add-rectangle-button" onClick={() => setElements((elements) => [...elements, elements.length])}>Add Square</button>
            <br/>
            <br/>
            <button onClick={() => insertSquares(10)}>+10 Squares</button>
            <br/>
            <br/>
            <button onClick={() => insertSquares(50)}>+50 Squares</button>
        </Sidebar>
    )
}
