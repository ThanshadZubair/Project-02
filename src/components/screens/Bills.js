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
                    <Status>
                        <Item1>Take Away</Item1>
                    </Status>
                    <Status>
                        <Item2>Delivery</Item2>
                    </Status>
                </OrderStatus>
                <Sections>
                    <Imager>
                         <Image src={require("../../Assets/images/Beans.jpg")} />
                     </Imager>
                    <Contents>
                        <Sub>Peru Beans</Sub>
                        <Para>Beans = 75% + 250g</Para>
                        <Select>$ 60.00</Select>
                    </Contents>
                    <Accounts>
                        <Round>
                            <Cash src={require("../../Assets/images/Minus.svg")}></Cash>
                        </Round>
                        <CashTag>2</CashTag>
                        <Round>
                            <Cash src={require("../../Assets/images/Plus.svg")}></Cash>
                        </Round>
                    </Accounts>
                </Sections>
                <Sections>
                    <Imager>
                         <Image src={require("../../Assets/images/CoffeeBali.jpg")} />
                     </Imager>
                    <Contents>
                        <Sub>Indonesian Beans</Sub>
                        <Para>Beans = 50% + 500g</Para>
                        <Select>$ 42.50</Select>
                    </Contents>
                    <Accounts>
                        <Round>
                            <Cash src={require("../../Assets/images/Minus.svg")}></Cash>
                        </Round>
                        <CashTag>2</CashTag>
                        <Round>
                            <Cash src={require("../../Assets/images/Plus.svg")}></Cash>
                        </Round>
                    </Accounts>
                    <Cost>
                        <CostItem>Items</CostItem>
                        <CostPrice>$ 102.50</CostPrice>
                    </Cost>
                     <Cost>
                        <CostItem>Discount</CostItem>
                        <DiscountPrice>-$ 3.00</DiscountPrice>
                    </Cost> 
                </Sections>
                <TotalTag>
                    <Total>Total</Total>
                    <TotalPrice>$ 99.50</TotalPrice>
                </TotalTag>
                <Payment>
                    <PaymentTag>Payment</PaymentTag>
                    <PaymentOption>
                        <PayTag>
                            <PayCash>Cash</PayCash>
                        </PayTag>
                        <PayTag>
                            <PayDebit>Debit</PayDebit>
                        </PayTag>
                        <PayTag>
                            <PayEWallet>E-Wallet</PayEWallet>
                        </PayTag> 
                    </PaymentOption>
                    <Conform>
                        <Checkout>Checkout</Checkout>
                    </Conform>
                    
                </Payment>
            </MainContainer>
        </>
    )
}

const MainContainer = styled.section`
    position: absolute;
    top:17%;
    right: 5%;
    width: 25%;
`;
const Billing = styled.div`
display: flex;
justify-content: space-between;

 `;
const Heading = styled.h2`
font-size: 20px;
margin-left:50px;

`;
const SubHeading = styled.h2`
font-style: 20px;
`;
const OrderStatus = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding:20px 30px;
`;
const Status = styled.span`
border-radius:30%;
padding: 10px 10px;
background-color: aliceblue;
display: inline-block;
`;
const Item = styled.a``;

const Item1 = styled.a`
`;

const Item2 = styled.a``;
const Sections = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-between;
border-bottom: 1px solid gray;
margin-bottom: 30px;
`;
const Imager = styled.div`
width:30%;
`;
const Image = styled.img`
width:100%;
`;
const Contents = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
gap:5px;
`;
const Sub = styled.small`
font-weight:bold;
`;
const Para = styled.span``;
const Select = styled.div`
font-weight:bold;
`;
const Accounts = styled.div`
gap:10px;
display:flex;
justify-content: space-between;
align-items: center;

`;
const Round = styled.button`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #212b33;
border-radius: 50%;
height: 40px;
width: 40px;


`;
const Cash = styled.img`
`;
const CashTag = styled.small``;
const Cost = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-bottom: 10px;

`;
const CostItem = styled.span`
font-weight: bold;
`;
const CostPrice = styled.span`
font-weight: bold;
color: #13EE5F;
`;

const DiscountPrice = styled.span`
font-weight: bold;
color: red;
`;
const TotalTag = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 30px;
`;
const Total = styled.span`
font-weight: bold;
`;
const TotalPrice = styled.span`
font-weight: bold;
color: #13EE5F;
`;
const Payment = styled.div`
display: flex;
flex-direction: column;
gap:40px;
`;
const PaymentTag = styled.div`
font-weight:bold;`;
const PaymentOption = styled.div`
display: flex;
justify-content: space-between;
`;
const PayTag = styled.div`
background-color: #FF7B00;
    display: inline-block;
    padding: 15px;
    border-radius: 50px;
    text-align: center;
`;
const PayCash = styled.div`
width: 66px;
`;
const PayDebit = styled.div`
width: 66px;
`;
const PayEWallet = styled.div`
width: 66px;
`;
const Conform = styled.div`
display: inline-block;
    
    
`;
const Checkout = styled.div`
background-color: #FF7B00;
    display: block;
    padding: 15px;
    border-radius: 50px;
    text-align: center;
`;



export default Bills;