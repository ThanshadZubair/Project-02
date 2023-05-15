import React from "react";
import MainBox from "./MainBox";
import { styled } from "styled-components";
import Top from "../../includes/Top";

function Home() {
  return (
    <Container>
      <Top />
      <MainBox />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export default Home;
