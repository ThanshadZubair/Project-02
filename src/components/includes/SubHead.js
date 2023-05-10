import React from 'react'
import Logo from '../../Assets/images/Logo-T12.svg'
import { styled } from 'styled-components'
import Menu from '../../Assets/images/Menu.svg'
import Tea from '../../Assets/images/tea.svg'
import Wallet from '../../Assets/images/wallet.svg'
import Graph from '../../Assets/images/Graph.svg'
import Settings from '../../Assets/images/Settings.svg'

export default function SubHead() {
  return (
    <>
        <SubHeadr>
          <ImgContainer>
            <LogoImage src={Logo} alt="" />
          </ImgContainer> 
          <Items>
            <Item>
              <img src={Menu} alt=""/>
            </Item>
            <Item>
              <img src={Tea} alt=""/>
            </Item>
            <Item>
              <img src={Wallet} alt=""/>
            </Item>
            <Item>
              <img src={Graph} alt=""/>
            </Item>
            <Item>
              <img src={Settings} alt=""/>
            </Item>
          </Items>   
        </SubHeadr>
      
    </>
  )
}
const SubHeadr = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width:80%;
  padding: 20px; 
  padding-top: 50px;
`;
const ImgContainer = styled.span`
  display: inline-block;
  width: 45px;
  margin-bottom: 60px;
`;
const LogoImage = styled.img`
  display:block;
  width: 100%;
`; 
const Items = styled.ul`
  padding: 0;
  width: 100%;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  align-items:center;
`;
const Item = styled.span`
  display: inline-block;
  width: 30px;
  margin-bottom: 50px ;
img {
  width: 100%;
  display: block;
}
&:last-child{
  margin-bottom: 0;
}
`;

