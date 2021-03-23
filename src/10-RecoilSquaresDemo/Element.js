import React from 'react'
import {DraggableCore} from 'react-draggable'
import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
// @ts-ignore
import randomMC from 'random-material-color'
import {atomFamily, useRecoilState, atom, useSetRecoilState} from 'recoil'

const Container = styled.div`
    position: absolute;
    border-radius: 5px;
    width: 25px;
    height: 25px;
    background-color: grey;
`

const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const elementState = atomFamily({
    key: 'element',
    default: () => ({
        top: Math.ceil(Math.random() * 865),
        left: Math.ceil(Math.random() * 850),
        color: randomMC.getColor(),
    }),
})

export const selectedElementIdState = atom({
    key: 'selectedElementId',
    default: null,
})

export const Element = ({id}) => {
    const [element, setElement] = useRecoilState(elementState(id))
    const setSelectedElement = useSetRecoilState(selectedElementIdState)

    return (
        <Container
            style={{top: element.top, left: element.left, backgroundColor: hexToRgba(element.color, 1)}}
            onMouseDown={() => setSelectedElement(id)}
        >
            <DraggableCore
                onDrag={(e) => {
                    setElement({
                        ...element,
                        top: element.top + e.movementY,
                        left: element.left + e.movementX,
                    })
                }}
            >
                <InnerContainer />
            </DraggableCore>
        </Container>
    )
}
