import React from 'react';
import Mainbox from './MainBox';
import {styled} from 'styled-components';

function Home() {
  return (
    <>
      <Container>
        
        <Mainbox />
      </Container>
    </>
  )
}

const Container = styled.section`
    display: flex;
`;


export default Home;