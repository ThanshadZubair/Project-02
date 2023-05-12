import React from 'react'
import {styled} from 'styled-components';



function Bills() {
    return (
        <>
            <MainContainer>
                <Billing>
                    <Heading>Bills</Heading>
                    <SubHeading>Order #3243</SubHeading>
                </Billing>
                <OrderStatus>
                    <Status>
                        <Item>Dine in</Item>
                    </Status>
                    <Status1>
                        <Item1>Take Away</Item1>
                    </Status1>
                    <Status2>
                        <Item2>Delivery</Item2>
                    </Status2>
                </OrderStatus>
                
                
            </MainContainer>
        </>
    )
}

const MainContainer = styled.section`
position: absolute;
    top:17%;
    right: 4%;
    width: 25%;
    background-color:pink;
`;
const Billing = styled.div`
display: flex;
justify-content: space-between;
`;
const Heading = styled.h2`
font-style: 20px;
`;
const SubHeading = styled.h2`
font-style: 20px;
`;
const OrderStatus = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Status = styled.span``;
const Item = styled.p``;
const Status1 = styled.span``;
const Item1 = styled.p`
color: #fff;`;
const Status2 = styled.span``;
const Item2 = styled.p``;

export default Bills;