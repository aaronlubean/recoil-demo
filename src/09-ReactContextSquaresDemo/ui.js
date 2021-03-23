import styled, {createGlobalStyle} from 'styled-components'

export const Sidebar = styled.div`
    width: 200px;
    height: 100%;
    background-color: darkgray;
    padding: 10px;
`

export const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0 15px 0;
`

export const GlobalStyles = createGlobalStyle`
    body {
        color: #FFF;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: border-box;
    }
`
