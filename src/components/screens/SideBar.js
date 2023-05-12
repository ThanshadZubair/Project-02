import React from 'react'
import {styled} from 'styled-components';
import Logo from '../../Assets/images/Logo-T12.svg';
import Menu from '../../Assets/images/Menu.svg';
import Tea from '../../Assets/images/tea.svg';
import Wallet from '../../Assets/images/wallet.svg'
import Graph from '../../Assets/images/Graph.svg';
import Settings from '../../Assets/images/Settings.svg';

const Bar = [
    {
        id:1,
        Icon: Menu,
    },
    {
        id:2,
        Icon: Tea,
    },
    {
        id:3,
        Icon: Wallet,
    },
    {
        id:4,
        Icon: Graph,
    },
    {
        id:5,
        Icon: Settings,
    },
];


function Sidebar() {
    return (
        <SidebarContainer>
            <ImgContainer>
                <LogoImg src={Logo}/>
            </ImgContainer>
            {Bar.map((val) => (
            <Box key={val.id}>
                <IconButton>
                    <Icons src={val.Icon} alt='Image'  />
                </IconButton>
            </Box>
            ))}
        </SidebarContainer>
    )
}

const SidebarContainer = styled.section`
    
    padding: 40px  0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
const ImgContainer = styled.div`
margin-bottom: 50%;
`;
const LogoImg = styled.img``;
const Box = styled.div`
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