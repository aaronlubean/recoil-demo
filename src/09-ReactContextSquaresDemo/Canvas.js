import React, {useContext} from 'react'
import styled from 'styled-components'
import {Element} from './Element'
import {ElementsContext} from './ReactContextSquaresDemo'

const CanvasContainer = styled.div`
    flex: 1;
    position: relative;
`

export const Canvas = () => {
    const {elements} = useContext(ElementsContext)

    return (
        <CanvasContainer>
            {elements.map((element) => {
                return <Element key={element.id} id={element.id} />
            })}
        </CanvasContainer>
    )
}
