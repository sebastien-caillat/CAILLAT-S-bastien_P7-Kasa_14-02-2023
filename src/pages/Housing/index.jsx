import { useParams } from "react-router-dom"
import housing from "../../components/data/logements.json"
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
`

const StyledHousingInfos = styled.div`
    display: block;
    flex-direction: column;
    position: relative;
    right: 14%;
    @media(max-width: 1200px) {
        right: 8%;
    }
    @media(max-width: 768px) {
        right: 14%;
    }
`

const StyledHousingTitle = styled.h1`
    display: flex;
    flex-wrap: wrap;
    font-size: 36px;
    color: ${colors.primary};
`

const StyledHousingLocation = styled.p`
    font-size: 18px;
    color: ${colors.primary};
    position: relative;
    bottom: 17px;
`
const StyledTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 10px;
    width: 115px;
    height: 25px;
    border-radius: 10px;
    background-color: ${colors.primary};
    @media(max-width: 768px) {
        width: 84px;
        height: 18px;
    }
`
const StyledTagText = styled.p`
    font-size: 14px;
    color: #FFFFFF;
    @media(max-width: 768px) {
        font-size: 10px;
    }
`

const StyledHostInfos = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 240px;
    margin-top: 30px;
    position: relative;
    left: 16%;
    @media(max-width: 1200px) {
        left: 12%;
    }
    @media(max-width: 768px) {
        left: 0%;
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
        position: relative;
        left: 45%;
        bottom: 50%;
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
        position: relative;
        left: 45%;
        bottom: 35%;
    }
`

const StyledRating = styled.div`
    display: flex;
    @media(max-width: 768px) {
        width: 98px;
        height: 18px;
        position: relative;
        right: 27%;
        bottom: 100%;
    }
`
const StyledStar = styled.img`
    margin: 5px;
    @media(max-width: 768px) {
        width: 15px;
        height: 15px;
    }
`

const StyledCollapseHousing = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    width: 90%;
    @media(max-width: 768px) {
        flex-direction: column;
        margin-top: -100px;
    }
`

const housingItem = housing;

console.log(housingItem);

function Housing() {

    const currentPageId = useParams().id;
    const housing = housingItem.filter(housing => housing.id === currentPageId);

    console.log("CURRENT PAGE ID");
    console.log(currentPageId);

    console.log("HOUSING ITEM ID");
    console.log(housing);

    return(
        housing.map(({ title, pictures, description, host, rating, location, equipments, tags }) => (
        <StyledHousing>
            <Carousel>
                {pictures.map((picture) => 
                <CarouselItem src={picture} alt='' />
                )}
            </Carousel>
            <StyledHousingInfos>
                <StyledHousingTitle>
                    {title}
                </StyledHousingTitle>
                <StyledHousingLocation>
                    {location}
                </StyledHousingLocation>
                <StyledTag>
                    <StyledTagText>
                        tag
                    </StyledTagText>
                </StyledTag>
            </StyledHousingInfos>
            <StyledHostInfos>
                <StyledHostName>
                    {host.name}
                </StyledHostName>
                <StyledHostPicture src={host.picture} alt='' />
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
            {description}
            </p>
            </Collapse>
            <Collapse origin='housing' label='Équipements'>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </Collapse>
            </StyledCollapseHousing>
        </StyledHousing>
        ))
    )
}

export default Housing