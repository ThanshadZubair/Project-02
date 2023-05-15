import React from 'react';
import {styled} from 'styled-components';
import SearchImg from '../../Assets/images/Search.svg'
import NotiImg from '../../Assets/images/Noti.svg'
import PlusIcon from '../../Assets/images/Snack.svg'


function Top() {
    return (
        <>
            <Container>
                <TopBox>
                    <Item>
                        <Heading>Welcome to kopiku Dashboard</Heading>
                        <Title>Let's choose menu</Title>
                    </Item>
                    <ItemTwo>
                        <Greybox>
                            <Input placeholder='Search menu....' />
                            <Span>
                                <Search src={SearchImg} />
                            </Span>
                        </Greybox>
                    </ItemTwo>
                    <ItemThree>
                        <Bell>
                            <Bellimg src={NotiImg} />
                        </Bell>
                        <Person>
                            <Profail>
                                <Man src={require("../../Assets/images/Admin.jpg")} />
                        
                            </Profail>
                            <Name>
                                <Position>Admin</Position>
                                <Alex>Alex Jorand</Alex>
                            </Name>
                        </Person>
                        <AddMenu>
                            <Plus>
                                <PlusImg src={PlusIcon} />
                            </Plus>
                            <Menu>Add new menu</Menu>
                        </AddMenu>
                    </ItemThree>
                </TopBox>
                <Hr />
            </Container>
        </>
    )
}


const Container = styled.section`
   width: 100%;
`;
const TopBox = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
`;
const Item = styled.div`
    width: 26.3%;
`;
const Heading = styled.h4`
    font-size: 12px;
    text-align: left;
`;
const Title = styled.h3`
    font-size: 20px;
    text-align: left;
`;
const ItemTwo = styled.div`
    width: 33.3%;
`;
const Greybox = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    height:50px;
    padding: 0 25px;
    width:80%;
    border-radius: 50px;
    background-color: #EEECEB;
`;
const Input = styled.input`
    background-color: #EEECEB;
    display: inline-block;
    border:0;
    outline: 0;
`;
const Span = styled.span`
    width: 18px;
    height: 18px;
    display: inline-block;
    
`;
const Search = styled.img`
    display: block;
    width: 100%;
`;
const ItemThree = styled.div`
    width: 33.3%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Bell = styled.div`
    width: 30px;
    height: 30px;
`;
const Bellimg = styled.img`
    display: block;
    width:100%;
`;
const Profail = styled.div`
    width: 60px;
    height: 60px;
`;
const Man = styled.img`
    width: 100%;
    border-radius:50px;
    display: block;
`;
const Position = styled.h5`
    font-size:12px;
`;
const Alex = styled.h3`
    font-size:14px;
`;
const Person = styled.div`
    display: flex;
    align-items: center;
`;
const Name = styled.div`
    
`;
const AddMenu = styled.div`
    width: 40%;
    display: flex;
    padding: 0 15px;
    align-items: center;
    background-color: #EEECEB;
    border-radius:50px;
`;
const Plus = styled.span`
    display: block;
    width:35px;
    height:35px;
    margin-right:5px;
`;
const PlusImg = styled.img`
    display: block;
    width: 100%;
`;
const Menu = styled.h5`
    font-size:16px;
`;
const Hr = styled.hr`
    width: 96%;
    margin: 0 auto;
`;


export default Top;