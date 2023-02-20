import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', serif, sans-serif;
    }

    body {
        background-color: ${colors.background};
        margin: auto;
        overflow: auto;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle