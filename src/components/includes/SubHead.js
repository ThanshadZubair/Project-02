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
           <LogoImage src={Logo} width={"40px"} />
           <Items>
                <Item src={Menu}/>
                <Item src={Tea}/>
                <Item src={Wallet}/>
                <Item src={Graph}/>
                <Item src={Settings}/>
            </Items>   
        </SubHeadr>
      
    </>
  )
}
const SubHeadr = styled.div`
 width:100%;
 padding-left: 20px;
`;
const LogoImage = styled.img`
  display:block;
  padding: 40px 30px;
`; 
const Items = styled.ul`
  width: 20px;
  display:flex;
  flex-wrap:wrap;
  height: 400px;
`;
const Item = styled.img`

`;

