// import logo from '../../assets/logo'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
    position: absolute;
    width: 1240px;
    height: 68px;
    left: 100px;
    top: 40px;
`

const NavBar = styled.div`
    display: flex;
    position: absolute;
    left: 75%;
    right: 0%;
    top: 25%;
    bottom: 25%;
`

const HomeLogo = styled.img`
    height: 68px;
`

function Header() {
    return(
        <NavContainer>
            <HomeLogo src='logo' alt='logo-kasa' />
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