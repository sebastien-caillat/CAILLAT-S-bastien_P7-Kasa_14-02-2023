import styled from "styled-components"
import colors from "../../utils/style/colors"
import { StyledLinkErrorPage } from "../../utils/style/Atoms"

const ErrorDiv = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 850px;
    @media(max-width: 768px) {
        margin-bottom: -280px;
    }
`
const Error404 = styled.h1`
    position: absolute;
    color: ${colors.primary};
    font-size: 288px;
    bottom: 150px;
    @media(max-width: 768px) {
        font-size: 96px;
        top: 160px;
    }
`
const ErrorTxt = styled.p`
    position: absolute;
    top: 630px;
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