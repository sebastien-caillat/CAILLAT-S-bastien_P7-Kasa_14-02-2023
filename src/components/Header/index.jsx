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
    top: 40px;
    z-index: 999;
    @media(max-width: 1024px) {
        margin-left: 45px;
    }
    @media(max-width: 768px) {
        margin: 20px;
        top: 0px;
    }
`

const NavBar = styled.div`
    display: flex;
    position: relative;
    @media(max-width: 1024px) {
        margin-right: 10px;
    }
    @media(max-width: 768px) {
        margin-left: 25px;
    }
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