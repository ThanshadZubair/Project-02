import React from 'react'
import { styled } from 'styled-components'
import SearchImg from '../../Assets/images/Search.svg'
import BelIcon from '../../Assets/images/Noti.svg'
import AddIcon from '../../Assets/images/Snack.svg'


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
            <AdminData>
                <Admin>
                  <img src={require("../../Assets/images/Frame 3466354.jpg") } alt='' /> 
                </Admin>
                <AdminProfile>
                  <AdminStatus>Admin</AdminStatus>
                  <AdminName>Alex jorand</AdminName>
                </AdminProfile>  
            </AdminData>
            <AddMenu>
                <AddImg src={AddIcon}/>
                <AddContent>Add new menu</AddContent>
            </AddMenu>

        </MainContainer>
  )
}


const MainContainer  = styled.div`
      width: 95%;
      padding-top:60px;
    height: 55px;
    display: flex;
    justify-content: space-between;
`;
const SubContainer = styled.div`
 
`;

const HeaderTag = styled.h3`
  font-size: 14px;
  margin-top:0;
`;
const SubHeader = styled.h1`
  font-size: 30px;
  margin-top: 0;
`;
const SearchBar =styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Search = styled.small`
font-size: 15px;
margin: 0 auto;
display: inline-block;
`;
const SearchIcon = styled.img`
  width: 35px;
`;
const BelTag = styled.div`
  width: 45px;
  display: flex;
  align-items: center;
`;
const Notification = styled.img`
  width: 100%;
`;
const AdminData = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Admin = styled.span`
   display: inline-block;
   width: 85px;
   
img {
  width: 100%;
  border-radius: 50px;
  display: block;
}
`;
const AdminProfile = styled.div`
`;
const AdminStatus = styled.span`
  
`;
const AdminName = styled.h3`
font-size: 18px;

`;
const AddMenu = styled.div`
  position: relative;
  width: 15%;
  height: 60px;
  border: 1px solid #FFF;
  border-radius:30px;
  background-color: #EEECE2;
`;
const AddImg = styled.img`
  position:absolute;
  left: 16px;
  top: 8px;
  width:18%;
  
  `;
  const AddContent = styled.h2`
  font-size: 20px;
  position: relative;
  left:30%;
  bottom: 5% ;


 
 `;

