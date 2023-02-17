import styled from "styled-components"
import natureBackground from '../../assets/nature-background.svg'

const BannerImg = styled.div`
  position: absolute;
  background-image: url(${natureBackground});
  background-repeat: 'no-repeat';
  background-size: cover;
  background-position: center;
  display: grid;
  place-items: center;
  margin-top: 170px;
  height: 223px;
  width: 90%;
  border-radius: 25px;
  mix-blend-mode: darken;
  margin-bottom: 30px;
`
const Title = styled.h1`
  font-size: 48px;
  color: #FFFFFF;
  position: absolute;
  display: flex;
  justify-content: center;

`

function Banner() {
    return(
    <BannerImg>
      <Title>
        Chez vous, partout et ailleurs
      </Title>
    </BannerImg>
    )
}

export default Banner