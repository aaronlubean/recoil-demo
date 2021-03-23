import React, {useState, createContext} from 'react'
import styled from 'styled-components'
import randomMC from 'random-material-color'

import {Canvas} from './Canvas'
import {LeftSidebar} from './LeftSidebar'
import {RightSidebar} from './RightSidebar'
import {GlobalStyles} from './ui'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`

export const ElementsContext = createContext({
    elements: [],
    setElements: () => {},
    selectedElement: undefined,
    setSelectedElement: () => {},
})

const createSquares = (numOfSquares) => {
    let elements = []
    let i = 0
    while (i < numOfSquares) {
        elements.push({
            id: elements.length,
            top: Math.ceil(Math.random() * 865),
            left: Math.ceil(Math.random() * 850),
            color: randomMC.getColor(),
        })
        i++
    }
    return elements
}

const ReactContextSquares = () => {
    const [elements, setElements] = useState(createSquares(1000))
    const [selectedElement, setSelectedElement] = useState()

    return (
        <ElementsContext.Provider value={{elements, setElements, selectedElement, setSelectedElement}}>
            <Container>
                <LeftSidebar />
                <Canvas />
                <RightSidebar />
                <GlobalStyles />
            </Container>
        </ElementsContext.Provider>
    )
}

export default function ReactContextSquaresDemo() {
    return <ReactContextSquares />
}