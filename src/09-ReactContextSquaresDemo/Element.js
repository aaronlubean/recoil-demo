import React, {useContext} from 'react'
import {DraggableCore} from 'react-draggable'
import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
import {ElementsContext} from './ReactContextSquaresDemo'

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
    align-items: center;
    justify-content: center;
`

export const Element = ({id}) => {
    
    const {elements, setSelectedElement, setElements} = useContext(ElementsContext)
    const element = elements[id]

    return (
        <Container
            style={{top: element.top, left: element.left, backgroundColor: hexToRgba(element.color, 1)}}
            onMouseDown={() => setSelectedElement(id)}
        >
            <DraggableCore onDrag={(e) => {
                setElements(
                    elements.map((el) => {
                        if (el.id === id) {
                            return {
                                ...el,
                                top: element.top + e.movementY,
                                left: element.left + e.movementX,
                            }
                        } else {
                            return el
                        }
                    }),
                ) 
            }}>
                <InnerContainer />
            </DraggableCore>
        </Container>
    )
}
