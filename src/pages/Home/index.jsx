import Banner from '../../components/Banner'
import Card from '../../components/Card';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
function Home() {
  return (
    <HomeWrapper>
      <Banner origin='home' />
      <Card />
    </HomeWrapper>
  );
}

export default Home;
