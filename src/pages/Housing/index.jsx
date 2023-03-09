import axios from "axios"
import { useState, useEffect } from "react"
import Carousel from "../../components/Carousel"
import Collapse from "../../components/Collapse"
import { CarouselItem } from "../../components/Carousel"
// import Error from "../../components/Error"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import star from "../../assets/star.png"

const StyledHousing = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 100px;
`

const StyledHousingInfos = styled.div`
    display: block;
    flex-direction: column;
`

const StyledHousingTitle = styled.h1`
    font-size: 36px;
    color: ${colors.primary};
`

const StyledHousingLocation = styled.p`
    font-size: 18px;
    color: ${colors.primary};
`
const StyledTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 115px;
    height: 25px;
    border-radius: 10px;
    background-color: ${colors.primary};
`
const StyledTagText = styled.p`
    font-size: 14px;
    color: #FFFFFF;
`

const StyledHostInfos = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 240px;
    margin-top: 30px;

`

const StyledHostName = styled.p`
    font-size: 18px;
    color: ${colors.primary};
    margin-right: 10px;
    max-width: 90px;
`

const StyledHostPicture = styled.div`
    width: 64px;
    height: 64px;
    background-color: #c4c4c4;
    border-radius: 50%;
`

const StyledRating = styled.div`
    display: flex;
`
const StyledStar = styled.img`
    margin: 5px;
`

const StyledCollapseHousing = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    width: 90%;
`

function Housing() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("../../components/data/logements.json")
            .then((res) => setData(res.data))
    }, [])

    const housingId = window.location.pathname.substring(8)
    const retrieveHousing = data.find((housing) => housing.id === housingId)

    // if(!retrieveHousing) return <Error />

    return(
        <StyledHousing>
            <Carousel>
                <CarouselItem>1</CarouselItem>
                <CarouselItem>2</CarouselItem>
                <CarouselItem>3</CarouselItem>
            </Carousel>
            <StyledHousingInfos>
                <StyledHousingTitle>
                    Housing Title
                </StyledHousingTitle>
                <StyledHousingLocation>
                    Location
                </StyledHousingLocation>
                <StyledTag>
                    <StyledTagText>
                        Exemple
                    </StyledTagText>
                </StyledTag>
            </StyledHousingInfos>
            <StyledHostInfos>
                <StyledHostName>
                    Alexandre Dumas
                </StyledHostName>
                <StyledHostPicture>

                </StyledHostPicture>
                <StyledRating>
                    <StyledStar src={star} alt='' />
                    <StyledStar src={star} alt='' />
                    <StyledStar src={star} alt='' />
                    <StyledStar src={star} alt='' />
                    <StyledStar src={star} alt='' />
                </StyledRating>
            </StyledHostInfos>
            <StyledCollapseHousing>
            <Collapse origin='housing' label='Description'>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            </Collapse>
            <Collapse origin='housing' label='Équipements'>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </Collapse>
            </StyledCollapseHousing>
        </StyledHousing>
    )
}

export default Housing