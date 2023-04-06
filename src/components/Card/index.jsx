import styled from 'styled-components';
import colors from '../../utils/style/colors'
import housing from '../data/logements.json'
import { useNavigate } from 'react-router-dom'

const CardGallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 30px;
    padding-bottom: 40px;
    margin-top: 450px;
    width: 90%;
    height: auto;
    background-color: ${colors.backgroundCard};
    border-radius: 25px;
    @media(max-width: 768px) {
        background-color: #FFFFFF;
        width: 100%;
        margin-top: 165px;
        margin-bottom: -120px;
    }
`
const CardItem = styled.div`
    position: relative;
    text-align: left;
    margin: 40px 30px 40px 30px;
    width: 340px;
    height: 340px;
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    &:hover {
        cursor: pointer;
    }
    @media(max-width: 768px) {
        margin-bottom: 0px;
        margin-top: 25px;
    }
`
const CardImg = styled.img`
    width: 100%;
    height: 340px;
    border-radius: 10px;
    opacity: 0.6;
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

    const navigate = useNavigate();

    return(
        <CardGallery>
            {housingCard.map(({ id, title, cover }) => (
                <CardItem key={id} onClick={() => {navigate(`/housing/${id}`)}}>
                    <CardImg src={cover} alt='' />
                    <CardTitle>{title}</CardTitle>
                </CardItem>                
            ))}
        </CardGallery>
    )
}

export default Card