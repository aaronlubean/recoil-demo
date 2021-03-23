import React, {useContext} from 'react'
import {Sidebar} from './ui'
import {ElementsContext} from './ReactContextSquaresDemo'
import randomMC from 'random-material-color'

export const LeftSidebar = () => {
    const {setElements} = useContext(ElementsContext)

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
            <h2>React Context</h2>
            <button id="add-rectangle-button"
                onClick={() => {
                    setElements((elements) => {
                        return [
                            ...elements,
                            {
                                id: elements.length,
                                top: Math.ceil(Math.random() * 865),
                                left: Math.ceil(Math.random() * 850),
                                color: randomMC.getColor(),
                            },
                        ]
                    })
                }}
            >
                Add Square
            </button>
            <br/>
            <br/>
            <button onClick={() => insertSquares(10)}>+10 Squares</button>
            <br/>
            <br/>
            <button onClick={() => insertSquares(50)}>+50 Squares</button>
        </Sidebar>
    )
}
