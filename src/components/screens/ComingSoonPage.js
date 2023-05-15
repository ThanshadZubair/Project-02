import React from 'react';
import styled from 'styled-components';
import Top from '../includes/Top';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100vh;
width: -webkit-fill-available;
`;

const Heading = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 24px;
  color: #777;
  margin-bottom: 40px;
`;

const ComingSoonPage = () => {
  return (
    <>
    <Container>
        <Top/>
      <Heading>Coming Soon</Heading>
      <Text>We are working on something awesome. Stay tuned!</Text>
    </Container>
    </>
  );
};

export default ComingSoonPage;
