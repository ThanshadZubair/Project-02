import React from 'react'
import { styled } from 'styled-components'
import SearchImg from '../../Assets/images/Search.svg'
import BelIcon from '../../Assets/images/Noti.svg'


export default function Header() {
  return (
        <MainContainer>
            <SubContainer>
                <HeaderTag>Welcome to Kopiku Dashboard</HeaderTag>
                <SubHeader>Let's Choose Menu</SubHeader>
            </SubContainer>
            <SearchBar>
                <Search>Search menu....</Search>
                <SearchIcon src={SearchImg}  />
            </SearchBar>
            <BelTag>
                <Notification src={BelIcon} />
            </BelTag>
            <Admin>
                <img src={require("../../Assets/images/Frame 3466354.jpg") } alt='' />  
            </Admin>

        </MainContainer>
  )
}


const MainContainer  = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
`;
const SubContainer = styled.div`
 
`;

const HeaderTag = styled.h3`
  font-size: 14px;
  margin-bottom:0;
`;
const SubHeader = styled.h1`
  font-size: 30px;
  margin-top: 0;
`;
const SearchBar =styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Search = styled.span`
display: inline-block;
`;
const SearchIcon = styled.img`
  width: 10%;
`;
const BelTag = styled.div`
width: 30px;
display: flex;align-items: center;
`;
const Notification = styled.img`
  width: 100%;
`;
const Admin = styled.span`
   display: inline-block;
  width: 30px;
img {
  width: 100%;
  display: block;
}
`;