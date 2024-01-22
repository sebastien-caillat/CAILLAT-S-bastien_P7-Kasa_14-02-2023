import logo from '../../assets/logo.svg'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 95%;
    height: 68px;
    margin-left: 110px;
    top: 40px;
    z-index: 999;
    @media(max-width: 1324px) {
        margin-left: 65px;
    }
    @media(max-width: 1024px) {
        margin-left: 45px;
    }
    @media(max-width: 768px) {
        width: 92%;
        margin: 20px 0px 0px 25px;
        top: 0px;
    }
`

const NavBar = styled.div`
    display: flex;
    position: relative;
`

const HomeLogo = styled.img`
    height: 68px;
    @media(max-width: 768px) {
        height: 47px;
    }
`

function Header() {
    return(
        <NavContainer>
            <HomeLogo src={logo} alt='logo-kasa' />
            <NavBar>
                <StyledLink to='/'>
                    Accueil
                </StyledLink>
                <StyledLink to='/about'>
                    A Propos
                </StyledLink>
            </NavBar>
        </NavContainer>
    )
}

export default Header