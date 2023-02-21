import styled from "styled-components"
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"

const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 860px;
    margin-right: 10px;
    align-items: center;
`

function About() {
    return(
        <StyledAbout>
            <Banner />
            <Collapse>
            </Collapse>
        </StyledAbout>        
    )
}

export default About