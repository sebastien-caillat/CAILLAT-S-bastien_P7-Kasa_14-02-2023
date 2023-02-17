import styled from 'styled-components';
import colors from '../../utils/style/colors'
import housing from '../data/logements.json'

const CardGallery = styled.div`
    display: flex;
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
`
const housingCard = housing;

function Card() {
    return(
        <CardGallery>
            {housingCard.map(({ id, title, cover }) => (
                <CardItem key={id} title={title} cover={cover} />
            ))}
        </CardGallery>
    )
}

export default Card