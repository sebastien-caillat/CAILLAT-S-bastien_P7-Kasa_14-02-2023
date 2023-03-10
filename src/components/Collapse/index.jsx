import styled from "styled-components";
import colors from "../../utils/style/colors"
import vector from "../../assets/vector.svg"
import { useState } from "react";

const StyledCollapse = styled.div`
    display: flex;
    flex-wrap: wrap;
    width : ${props =>
        props.origin === 'housing' ? '45%' 
        : '75%' };
    position: relative;
    top: ${props =>
        props.origin === 'housing' ? '20px' 
        : '500px' };
    line-height: 0.5;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    border-radius: 5px;
    background-color: ${colors.primary};
    @media(max-width: 768px) {
        width: 90%;
        top: ${props =>
            props.origin === 'housing' ? '50px' 
            : '330px' };
    }
`

const StyledToggleButton = styled.button`
    background-color: ${colors.primary};
    border: none;
    margin-right: 15px;
`

const StyledToggleImg = styled.img`
    transform: ${props =>
        props.isOpen === 'true' ? 'rotate(180deg)'
        : 'null'};
    @media(max-width: 768px) {
        width: 18px;
    }
`

const StyledTitle = styled.h2`
    font-size: 24px;
    font-weight: normal;
    color: #FFFFFF;
    padding-left: 12px;
    @media(max-width: 768px) {
        font-size: 13px;
    }
`

const StyledToggleDiv = styled.div`
    background-color: ${colors.backgroundCard};
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    line-height: 1.5;
`

const StyledToggleTxt = styled.p`
    font-size: 24px;
    color: ${colors.primary};
    margin-left: 12px;
    margin-right: 12px;
    @media(max-width: 768px) {
        font-size: 12px;
    }
`

function Collapse(props) {

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    if(props.origin === 'about') {
        return (
            <StyledCollapse>
            <StyledTitle>{props.label}</StyledTitle>
            <StyledToggleButton onClick={toggle}>
                <StyledToggleImg src={vector} alt='' isOpen={ open ? 'true' : 'false' }/>
            </StyledToggleButton>
            {open && 
                <StyledToggleDiv>
                    <StyledToggleTxt>
                        {props.children}
                    </StyledToggleTxt>
                </StyledToggleDiv>
            } 
            </StyledCollapse>
        )
    } else if (props.origin === 'housing') {
        return (
            <StyledCollapse origin='housing'>
            <StyledTitle>{props.label}</StyledTitle>
            <StyledToggleButton onClick={toggle}>
                <StyledToggleImg src={vector} alt='' isOpen={ open ? 'true' : 'false' }/>
            </StyledToggleButton>
            {open && 
                <StyledToggleDiv>
                    <StyledToggleTxt>
                        {props.children}
                    </StyledToggleTxt>
                </StyledToggleDiv>
            } 
            </StyledCollapse>
        )
    }
}

export default Collapse