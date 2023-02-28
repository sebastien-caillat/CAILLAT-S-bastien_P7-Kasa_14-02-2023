import footerLogo from '../../assets/logo-footer.svg'
import styled from 'styled-components'

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: #000000;
    width: 100%;
    height: 209px;
    position: relative;
    top: 140px;
`

const StyledFooterImg = styled.img`
    width: 122px;
    padding-top: 35px;
`

const StyledFooterText = styled.p`
    color: #FFFFFF;
    font-size: 24px;
    @media(max-width: 768px) {
        font-size: 12px;
        padding-bottom: 30px;
    }
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