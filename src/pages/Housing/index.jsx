import Carousel from "../../components/Carousel"
import Collapse from "../../components/Collapse"
import { CarouselItem } from "../../components/Carousel"
import styled from "styled-components"

const StyledHousing = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
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
            <Collapse origin='housing' label='Description'>
            <p>
            Description
            </p>
            </Collapse>
            <Collapse origin='housing' label='Équipements'>
                <p>
                Équipements
                </p>
            </Collapse>
        </StyledHousing>
    )
}

export default Housing