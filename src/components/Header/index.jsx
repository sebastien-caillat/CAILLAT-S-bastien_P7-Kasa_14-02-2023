import logo from '../../assets/logo.svg'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 95%;
    height: 68px;
    top: 40px;
    z-index: 999;
    @media(max-width: 768px) {
        width: 92%;
        margin: 5% 0% 0% 5%;
        top: 0px;
    }
`

const NavBar = styled.div`
    display: flex;
    position: relative;
    @media(max-width: 768px) {
        left: 2%;
    }
`

const HomeLogo = styled.img`
    height: 68px;
    margin-left: 5%;
    @media(max-width: 768px) {
        height: 40px;
        margin-left: 0%;
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