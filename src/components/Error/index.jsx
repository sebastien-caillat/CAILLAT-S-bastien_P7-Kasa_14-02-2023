import styled from "styled-components"
import colors from "../../utils/style/colors"
import { StyledLinkErrorPage } from "../../utils/style/Atoms"

const ErrorDiv = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    flex-direction: column;
    align-items: center;
`
const Error404 = styled.h1`
    color: ${colors.primary};
    font-size: 288px;
`
const ErrorTxt = styled.p`
    color: ${colors.primary};
    font-size: 36px;
    font-weight: 500;
    margin-top: -200px;
    margin-bottom: 150px;
`
function Error() {
    return(
        <ErrorDiv>
            <Error404>404</Error404>
            <ErrorTxt>Oups ! La page que vous demandez n'existe pas.</ErrorTxt>
            <StyledLinkErrorPage to='/'>Retourner sur la page d'accueil</StyledLinkErrorPage>
        </ErrorDiv>
    )
}

export default Error