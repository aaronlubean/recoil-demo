import React from 'react'
import {useRecoilValue} from 'recoil'
import styled from 'styled-components'
import {elementsState} from './RecoilSquaresDemo'
import {Element} from './Element'

const CanvasContainer = styled.div`
    flex: 1;
    position: relative;
`

export const Canvas = () => {
    const elements = useRecoilValue(elementsState)

    return (
        <CanvasContainer>
            {elements.map((element) => {
                return <Element key={element} id={element} />
            })}
        </CanvasContainer>
    )
}
