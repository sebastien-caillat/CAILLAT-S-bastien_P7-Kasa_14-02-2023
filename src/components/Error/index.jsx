import styled from "styled-components"
import colors from "../../utils/style/colors"
import { StyledLinkErrorPage } from "../../utils/style/Atoms"

const ErrorDiv = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const Error404 = styled.h1`
    position: absolute;
    color: ${colors.primary};
    font-size: 288px;
    @media(max-width: 768px) {
        font-size: 96px;
        top: 170px;
    }
`
const ErrorTxt = styled.p`
    position: absolute;
    top: 500px;
    color: ${colors.primary};
    font-size: 36px;
    @media(max-width: 768px) {
        width: 260px;
        font-size: 18px;
        top: 320px;
    }
`
function Error() {
    return(
        <ErrorDiv>
            <Error404>404</Error404>
            <ErrorTxt>Oups!&nbsp;La&nbsp;page&nbsp;que vous&nbsp;demandez&nbsp;n'existe&nbsp;pas.</ErrorTxt>
            <StyledLinkErrorPage to='/'>Retourner sur la page d'accueil</StyledLinkErrorPage>
        </ErrorDiv>
    )
}

export default Error