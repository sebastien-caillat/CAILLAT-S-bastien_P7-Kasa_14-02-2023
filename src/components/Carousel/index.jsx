import React, { useState } from "react";
import styled from "styled-components";
import vector from "../../assets/vector.svg"

const StyledCarouselItem = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 415px;
    background-color: #FF6060;
    color: #ffffff;
`
const StyledCarousel = styled.div`
    overflow: hidden;
    margin-top: 150px;
    width: 90%;
    border-radius: 25px;
`
const StyledInner = styled.div`
    white-space: nowrap;
    transition: transform 0.3s;
`

const StyledPreviousButton = styled.button`
    display: flex;
    justify-content: center;
    margin: 5px;
    margin-left: 55px;
    transform: rotate(90deg);
    width: 47px;
    height: 80px;
    position: fixed;
    top: 310px;
    left: 70px;
    border: none;
    background-color: #FF6060;
`

const StyledNextButton = styled.button`
    display: flex;
    justify-content: center;
    margin: 5px;
    margin-right: 55px;
    transform: rotate(-90deg);
    width: 47px;
    height: 80px;
    position: fixed;
    top: 310px;
    right: 70px;
    border: none;
    background-color: #FF6060;
`

export const CarouselItem = ({ children, width }) => {
    return (
        <StyledCarouselItem style={{ width: width }}>
            {children}
        </StyledCarouselItem>
    )
}

function Carousel({ children }) {
    
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
    
        if(newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex);
    }

    return(
        <StyledCarousel>
            <StyledInner style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: '100%' });
                })}
            </StyledInner>
            <StyledPreviousButton onClick={() => { updateIndex(activeIndex - 1) }}>
                <img src={vector} alt='' />
            </StyledPreviousButton>
            <StyledNextButton onClick={() => { updateIndex(activeIndex + 1)}}>
                <img src={vector} alt='' />
            </StyledNextButton>
        </StyledCarousel>
    )
}

export default Carousel