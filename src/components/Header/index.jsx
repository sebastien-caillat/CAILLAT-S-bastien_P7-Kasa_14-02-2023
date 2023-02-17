import logo from '../../assets/logo.svg'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 90%;
    height: 68px;
    margin-left: 100px;
    margin-right: 100px;
    top: 40px;
`

const NavBar = styled.div`
    display: flex;
    position: relative;
    left: 35px;
`

const HomeLogo = styled.img`
    height: 68px;
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