import styled from 'styled-components';
import colors from '../../utils/style/colors'
import housing from '../data/logements.json'

const CardGallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 50px;
    margin-top: 450px;
    margin-bottom: -800px;
    width: 90%;
    height: auto;
    background-color: ${colors.backgroundCard};
    border-radius: 25px;
`
const CardItem = styled.div`
    padding: 20px;
    width: 340px;
    height: 340px;
    border: 2px solid black;
    border-radius: 10px;
`
const CardImg = styled.img`
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`
const CardTitle = styled.h2`
    font-size: 18px;
`
const housingCard = housing;

function Card() {
    return(
        <CardGallery>
            {housingCard.map(({ id, title, cover }) => (
                <CardItem key={id} cover={cover} title={title}>
                    <CardImg src={cover} alt='' />
                    <CardTitle>{title}</CardTitle>
                </CardItem>                
            ))}
        </CardGallery>
    )
}

export default Card