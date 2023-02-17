import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', serif, sans-serif;
    }

    body {
        background-color: ${colors.background};
        margin: 0;
        overflow: auto;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle