import React from "react";
import { styled } from "styled-components";
import Logo from "../../Assets/images/Logo-T12.svg";
import Menu from "../../Assets/images/Menu.svg";
import Tea from "../../Assets/images/tea.svg";
import Wallet from "../../Assets/images/wallet.svg";
import Graph from "../../Assets/images/Graph.svg";
import Settings from "../../Assets/images/Settings.svg";
import { NavLink, useLocation } from "react-router-dom";

const Bar = [
  {
    id: 1,
    Icon: Menu,
    route: "/",
  },
  {
    id: 2,
    Icon: Tea,
    route: "/tea/",
  },
  {
    id: 3,
    Icon: Wallet,
    route: "/wallet/",
  },
  {
    id: 4,
    Icon: Graph,
    route: "/graph/",
  },
  {
    id: 5,
    Icon: Settings,
    route: "/settings/",
  },
];

function Sidebar() {
  let location = useLocation();
  let path = location.pathname;
  return (
    <SidebarContainer>
      <ImgContainer>
        <LogoImg src={Logo} />
      </ImgContainer>
      {Bar.map((val) => (
        <Box key={val.id} to={val.route}>
          <IconButton>
            {val.route === path ? (
              <Icons src={val.Icon} alt="Image" />
            ) : (
              <Icons src={val.Icon} alt="Image" style={{ filter: "grayscale(1)" }} />
            )}
          </IconButton>
        </Box>
      ))}
    </SidebarContainer>
  );
}

const SidebarContainer = styled.section`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgContainer = styled.div`
  margin-bottom: 50%;
`;
const LogoImg = styled.img``;
const Box = styled(NavLink)`
  margin-bottom: 15px;
`;
const IconButton = styled.div`
  display: block;
  width: 30px;
  height: 30px;
  margin-bottom: 30px;
`;

const Icons = styled.img`
  display: block;
  width: 100%;
`;

export default Sidebar;
