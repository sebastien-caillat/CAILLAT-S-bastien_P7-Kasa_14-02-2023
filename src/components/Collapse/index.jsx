import styled from "styled-components";
import colors from "../../utils/style/colors"
import vector from "../../assets/vector.svg"
import collapse from "../data/collapses-about.json"
import { useState } from "react";

const StyledCollapse = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    margin: 15px;
    border-radius: 5px;
    background-color: ${colors.primary};
`

const StyledToggleButton = styled.button`
    background-color: ${colors.primary};
    border: none;
    margin-right: 15px;
`

const StyledTitle = styled.h2`
    font-size: 24px;
    color: #FFFFFF;
    padding-left: 12px;
`

const StyledToggleDiv = styled.div`
    display: flex;
    width: 100%;
    background-color: ${colors.backgroundCard};
    border-radius: 5px;
    margin-top: 150px;
`

const StyledToggleTxt = styled.p`
    font-size: 24px;
    color: ${colors.primary};
    margin-left: 12px;
`
const collapses = collapse;

function Collapse() {

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    return(
        collapses.map(({ id, title, description }) => (
            <StyledCollapse key={id}>
                <StyledTitle>{title}</StyledTitle>
                <StyledToggleButton onClick={toggle}><img src={vector} alt='vector' /></StyledToggleButton>
                {open && (
                    <StyledToggleDiv>
                        <StyledToggleTxt>{description}</StyledToggleTxt>
                    </StyledToggleDiv>
                )}
            </StyledCollapse>
        ))      
    )
}

export default Collapse