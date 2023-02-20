import styled from 'styled-components';
import colors from '../../utils/style/colors'
import housing from '../data/logements.json'

const CardGallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 450px;
    margin-bottom: -800px;
    width: 90%;
    height: auto;
    background-color: ${colors.backgroundCard};
    border-radius: 25px;
`
const CardItem = styled.div`
    position: relative;
    text-align: left;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 40px;
    margin-top: 40px;
    width: 340px;
    height: 340px;
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
`
const CardImg = styled.img`
    width: 100%;
    height: 340px;
    border-radius: 10px;
`
const CardTitle = styled.p`
    position: absolute;
    bottom: 10px;
    line-height: 1.5;
    inline-size: 200px;
    overflow-wrap: break-word;
    padding-left: 18px;
    font-size: 18px;
    color: #FFFFFF;
    z-index: 999;
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