import styled from "styled-components";
import colors from "../../utils/style/colors"
import vector from "../../assets/vector.svg"
import { useState } from "react";

const StyledCollapse = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    position: relative;
    top: 500px;
    line-height: 0.5;
    align-items: center;
    justify-content: space-between;
    margin: 15px;
    border-radius: 5px;
    background-color: ${colors.primary};
    z-index: 999;
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
    background-color: ${colors.backgroundCard};
    border-radius: 5px;
    line-height: 1.5;
    z-index: 1;
`

const StyledToggleTxt = styled.p`
    font-size: 24px;
    color: ${colors.primary};
    margin-left: 12px;
`

function Collapse(props) {

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    if (props.origin === 'about') {

    return (
          <StyledCollapse>
          <StyledTitle>{props.label}</StyledTitle>
          <StyledToggleButton onClick={toggle}><img src={vector} alt='' /></StyledToggleButton>
          {open && 
            <StyledToggleDiv>
                <StyledToggleTxt>
                    {props.children}
                </StyledToggleTxt>
            </StyledToggleDiv>
          } 
          </StyledCollapse>
    )

    } else {
        return(
            <div>
                <p>En construction</p>
            </div>
        )
    }
}

export default Collapse