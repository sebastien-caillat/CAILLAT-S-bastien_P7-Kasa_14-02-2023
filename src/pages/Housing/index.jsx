import Carousel from "../../components/Carousel"
import { CarouselItem } from "../../components/Carousel"
import styled from "styled-components"

const StyledHousing = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 900px;
`

function Housing() {
    return(
        <StyledHousing>
            <Carousel>
                <CarouselItem>1</CarouselItem>
                <CarouselItem>2</CarouselItem>
                <CarouselItem>3</CarouselItem>
            </Carousel>
        </StyledHousing>
    )
}

export default Housing