import React from 'react'
import { styled } from 'styled-components'
import SearchImg from '../../Assets/images/Search.svg'

export default function Header() {
  return (
    <>
        <Headers>
            <Welcome>Welcome to Kopiku Dashboard</Welcome>
            <Menu>Let's Choose Menu</Menu>
            <SearchBar>
                <Search>Search menu....</Search>
                <SearchIcon src={SearchImg} width={"20px"} />
            </SearchBar>
        </Headers>
      
    </>
  )
}


const Headers = styled.div`
  width:100%;
`;
const Welcome = styled.h3`
  font-size: 14px;
`;
const Menu = styled.h1`
  font-size: 30px;
`;
const SearchBar =styled.div`

`;
const Search = styled.span`
`;
const SearchIcon = styled.img`
`;