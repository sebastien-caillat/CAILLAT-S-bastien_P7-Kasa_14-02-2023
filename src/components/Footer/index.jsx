// import footerLogo from '../../assets/logo-footer'
import styled from 'styled-components'

const StyledFooter = styled.div`
    background-color: '#000000';
    position: relative;
    width: 375px;
    height: 209px;
`
function Footer() {
    return(
        <StyledFooter>
            <img src='footerLogo' alt='logo-kasa' />
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </StyledFooter>
    )
}

export default Footer