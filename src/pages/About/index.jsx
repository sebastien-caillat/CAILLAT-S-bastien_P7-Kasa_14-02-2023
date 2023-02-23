import styled from "styled-components"
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"

const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    margin-bottom: 860px;
    margin-right: 10px;
`

const StyledCollapseDiv = styled.div`
    margin-top: 450px;
    margin-bottom: -350px;
    width: 80%;
    height: 47px;
`

function About() {
    return(
        <StyledAbout>
            <Banner origin='about' />
            <StyledCollapseDiv>
                <Collapse></Collapse>
            </StyledCollapseDiv>
        </StyledAbout>        
    )
}

export default About