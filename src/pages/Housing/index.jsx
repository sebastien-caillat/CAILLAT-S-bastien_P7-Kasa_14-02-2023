import { useParams, useNavigate } from "react-router-dom"
import housing from "../../components/data/logements.json"
import Carousel from "../../components/Carousel"
import Collapse from "../../components/Collapse"
import { CarouselItem } from "../../components/Carousel"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import fullstar from "../../assets/star.png"
import emptystar from "../../assets/emptystar.png"
import { useEffect } from "react"

const StyledHousing = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 130px;
`

const StyledCarouselItemImg = styled.img`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 415px;
    object-fit: cover;
    width: 100%;
    @media(max-width: 768px) {
        height: 255px;
    }
`

const StyledHousingInfos = styled.div`
    display: block;
    flex-direction: column;
    position: absolute;
    top: 560px;
    left: 100px;
    @media(max-width: 1200px) {
        left: 40px;
        top: 572px;
    }
    @media(max-width: 768px) {
        left: 20px;
        top: 360px;
    }
`

const StyledHousingTitle = styled.h1`
    display: flex;
    flex-wrap: wrap;
    font-size: 36px;
    color: ${colors.primary};
    @media(max-width: 1200px) {
        font-size: 30px;
    }
    @media(max-width: 768px) {
        font-size: 18px;
        padding-bottom: 10px;
    }
`

const StyledHousingLocation = styled.p`
    font-size: 18px;
    color: ${colors.primary};
    position: relative;
    bottom: 17px;
    @media(max-width: 768px) {
        font-size: 14px;
    }
`

const StyledTagDiv = styled.div`
    display: flex;
`

const StyledTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 10px;
    min-width: 115px;
    height: 25px;
    border-radius: 10px;
    margin-right: 10px;
    background-color: ${colors.primary};
    @media(max-width: 768px) {
        // width: 84px;
        height: 18px;
        min-width: 50px;
        flex-wrap: wrap;
    }
`
const StyledTagText = styled.p`
    font-size: 14px;
    color: #FFFFFF;
    margin: 0px 10px 0px 10px;
    @media(max-width: 768px) {
        font-size: 10px;
    }
`

const StyledHostInfos = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 240px;
    margin-top: 30px;
    position: absolute;
    top: 560px;
    right: 50px;
    @media(max-width: 1200px) {
        right: 0px;
    }
    @media(max-width: 768px) {
        top: 470px;
        right: 30px;
    }
`

const StyledHostName = styled.p`
    font-size: 18px;
    color: ${colors.primary};
    margin-right: 10px;
    margin-left: 30px;
    max-width: 90px;
    text-align: right;
    @media(max-width: 768px) {
        font-size: 12px;
        position: absolute;
        right: 20px;
        top: -30px;
    }
`

const StyledHostPicture = styled.img`
    width: 64px;
    height: 64px;
    background-color: #c4c4c4;
    border-radius: 50%;
    @media(max-width: 768px) {
        width: 32px;
        height: 32px;
        position: absolute;
        right: -10px;
        top: -20px;
    }
`

const StyledRating = styled.div`
    display: flex;
    @media(max-width: 768px) {
        width: 98px;
        height: 18px;
        position: absolute;
        right: 270px;
        top: -20px;
    }
`
const StyledStar = styled.img`
    margin: 5px;
    @media(max-width: 768px) {
        width: 15px;
        height: 15px;
    }
`

const StyledCollapseEquipment = styled.ul`
    list-style-type: none;
    position: relative;
    right: 35px;
`

const housingItem = housing;

function Housing() {

    const currentPageId = useParams().id;
    const housing = housingItem.filter(housing => housing.id === currentPageId);

    const navigate = useNavigate();
    const wrongHousingId = housingItem.find(housing => housing.id === currentPageId);

    useEffect(() => {
        if(wrongHousingId === undefined) {
        navigate("/*");
    }
    })

    return(
        housing.map(({ title, pictures, description, host, rating, location, equipments, tags }) => (
        <StyledHousing>
            <Carousel>
                {pictures.map((picture) => 
                <CarouselItem>
                    <StyledCarouselItemImg src={picture} alt='' />
                </CarouselItem>
                )}
            </Carousel>
            <StyledHousingInfos>
                <StyledHousingTitle>
                    {title}
                </StyledHousingTitle>
                <StyledHousingLocation>
                    {location}
                </StyledHousingLocation>
                <StyledTagDiv>
                {tags.map((tag) => 
                <StyledTag>                   
                    <StyledTagText>
                        {tag}
                    </StyledTagText>                   
                </StyledTag>
                )}
                </StyledTagDiv>
            </StyledHousingInfos>
            <StyledHostInfos>
                <StyledHostName>
                    {host.name}
                </StyledHostName>
                <StyledHostPicture src={host.picture} alt='' />
                <StyledRating>
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return(
                            <StyledStar src={ratingValue <= rating ? fullstar : emptystar } alt='' />
                        )
                    })}
                </StyledRating>
            </StyledHostInfos>
            <Collapse origin='housing' label='Description'>
            <p>
            {description}
            </p>
            </Collapse>
            <Collapse origin='housing' label='Équipements'>
                <StyledCollapseEquipment>
                    {equipments.map((equipment) =>
                    <li>{equipment}</li>
                    )}
                </StyledCollapseEquipment>
            </Collapse>
        </StyledHousing>
        ))
    )
}

export default Housing