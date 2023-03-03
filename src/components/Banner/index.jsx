import styled from "styled-components"
import homeBanner from '../../assets/home-banner.png'
import aboutBanner from '../../assets/about-banner.png'

const BannerImg = styled.div`
  position: absolute;
  background-repeat: 'no-repeat';
  background-size: cover;
  background-position: center;
  display: grid;
  place-items: center;
  margin-top: 170px;
  margin-bottom: 30px;
  height: 223px;
  width: 90%;
  border-radius: 25px;
  @media(max-width: 768px) {
    border-radius: 10px;
    margin-top: 85px;
    height: ${props =>
      props.origin === 'about' ? '223px' 
      : '111px' };
  }
`
const Title = styled.h1`
  font-size: 48px;
  color: #FFFFFF;
  position: absolute;
  display: flex;
  justify-content: center;
  @media(max-width: 768px) {
    font-size: 24px;
    width: 50px;
    margin-right: 75px;
  }
`

function Banner(props) {

  if (props.origin === 'home') {
    return(
    <BannerImg  style = {{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${homeBanner})`,
      }}>
      <Title>
        Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs
      </Title>
    </BannerImg>
    )   
  } else if (props.origin === 'about') {
    return(
      <BannerImg origin='about' style = {{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${aboutBanner})`,
      }} />
    )
  }

}

export default Banner