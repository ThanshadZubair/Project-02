import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./menu/Home";
import Sidebar from "../includes/SideBar";
import { styled } from "styled-components";
import ComingSoonPage from "./ComingSoonPage";

function MainPage() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={[<Sidebar />,<Home/>]} />
          {/* <Route index element={[<Sidebar />,<Home/>]} />
          <Route path="/coffee" element={[<Sidebar />,<Home/>]} />
          <Route path="/tea-2" element={[<Sidebar />,<Home/>]} />
          <Route path="/cakes" element={[<Sidebar />,<Home/>]} />
          <Route path="/bundles" element={[<Sidebar />,<Home/>]} />
          <Route path="/snack" element={[<Sidebar />,<Home/>]} />
        </Route> */}
        <Route path="tea/" element={[<Sidebar />,<ComingSoonPage/>]} />
        <Route path="wallet/" element={[<Sidebar />,<ComingSoonPage/>]} />
        <Route path="graph/" element={[<Sidebar />,<ComingSoonPage/>]} />
        <Route path="settings/" element={[<Sidebar />,<ComingSoonPage/>]} />
      </Routes>
    </Container>
  );
}

export default MainPage;

const Container = styled.section`
  display: flex;
  height:100%;
  position: relative;
`;
