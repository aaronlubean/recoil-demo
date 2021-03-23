import React from 'react'
import {atom} from 'recoil'
import styled from 'styled-components'

import {Canvas} from './Canvas'
import {LeftSidebar} from './LeftSidebar'
import {RightSidebar} from './RightSidebar'
import {GlobalStyles} from './ui'
import {RecoilRoot} from 'recoil'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`

const createSquares = (numOfSquares) => {
    let elements = []
    let i = 0
    while (i < numOfSquares) {
        elements.push(elements.length)
        i++
    }
    return elements
}

export const elementsState = atom({
    key: 'elements',
    default: createSquares(1000),
})

const RecoilSquares = () => {
    return (
        <Container>
            <LeftSidebar />
            <Canvas />
            <RightSidebar />
            <GlobalStyles />
        </Container>
    )
}

export default function RecoilSquaresDemo() {
    return (
        <RecoilRoot>
            <RecoilSquares />
        </RecoilRoot>
    )
}
