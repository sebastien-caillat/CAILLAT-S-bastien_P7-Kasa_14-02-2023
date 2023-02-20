import footerLogo from '../../assets/logo-footer.svg'
import styled from 'styled-components'

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-top: 860px;
    background-color: #000000;
    width: 100%;
    position: absolute;
    height: 209px;
    clear: both;
`

const StyledFooterImg = styled.img`
    width: 122px;
    padding-top: 2%;
`

const StyledFooterText = styled.p`
    color: #FFFFFF;
    font-size: 24px;
`

function Footer() {
    return(
        <StyledFooter>
            <StyledFooterImg src={footerLogo} alt='logo-kasa' />
            <StyledFooterText>
                © 2020 Kasa. All rights reserved
            </StyledFooterText>
        </StyledFooter>
    )
}

export default Footer