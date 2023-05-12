import React from 'react';
import {styled} from 'styled-components';

function MenuItem() {
    return (
    <>
        <Container>
            <Heading>Beans menu</Heading>
            <MainBox>
                <Left>
                    <Indonesian>
                        <Box>
                            <Imager>
                                <Image src={require("../../Assets/images/CoffeeBali.jpg")} />
                            </Imager>
                            <Contents>
                                <Sub>Indonesian Beans</Sub>
                                <Para>Selected coffee beans with the best quality from indonesia</Para>
                                <Select>$ 35.00</Select>
                            </Contents>
                        </Box>
                        <Roast>Roasting Type</Roast>
                        <Roasting>
                            <Pricebox><Price>25%</Price></Pricebox>
                            <Pricebox><Price>25%</Price></Pricebox>
                            <Pricebox><Price>25%</Price></Pricebox>
                            <Pricebox><Price>25%</Price></Pricebox>
                        </Roasting>
                        <Pack>Volume Pack</Pack>
                        <Volume>
                            <Volumebox><Price>250g</Price></Volumebox>
                            <Volumebox><Price>500g</Price></Volumebox>
                            <Volumebox><Price>750g</Price></Volumebox>
                        </Volume>
                        <Add>Add to bill</Add>
                    </Indonesian>
                    <Indonesian>
                        <Box>
                            <Imager>
                                <Image src={require("../../Assets/images/CoffeeTgl.jpg")} />
                            </Imager>
                            <Contents>
                                <Sub>Indonesian Beans</Sub>
                                <Para>Selected coffee beans with the best quality from indonesia</Para>
                                <Select>$ 35.00</Select>
                            </Contents>
                        </Box>
                        <View>View details</View>
                    </Indonesian>
                </Left>
                <Right>
                    <Indonesian>
                        <Box>
                            <Imager>
                                <Image src={require("../../Assets/images/CoffeeFalls.jpg")} />
                            </Imager>
                            <Contents>
                                <Sub>Costa Rica Beans</Sub>
                                <Para>Selected coffee beans with the best quality from indonesia</Para>
                                <Select>$ 35.00</Select>
                            </Contents>
                        </Box>
                        <View>View details</View>
                    </Indonesian>
                    <Indonesian>
                        <Box>
                            <Imager>
                                <Image src={require("../../Assets/images/Beans.jpg")} />
                            </Imager>
                            <Contents>
                                <Sub>Peru Beans</Sub>
                                <Para>Selected coffee beans with the best quality from indonesia</Para>
                                <Select>$ 35.00</Select>
                            </Contents>
                        </Box>
                        <View>View details</View>
                    </Indonesian>
                    <Indonesian>
                        <Box>
                            <Imager>
                                <Image src={require("../../Assets/images/CoffeeDon.jpg")} />
                            </Imager>
                            <Contents>
                                <Sub>Guatemala Beans</Sub>
                                <Para>Selected coffee beans with the best quality from indonesia</Para>
                                <Select>$ 35.00</Select>
                            </Contents>
                        </Box>
                        <View>View details</View>
                    </Indonesian>
                </Right>
            </MainBox>
        </Container>
    </>
    )
}

const Container = styled.section`
    position: absolute;
    top: 25%;
    left: 10%;
    width: 64%;
`;
const MainBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 49%;
`;
const Right = styled.div`
    width: 49%;
`;
const Heading = styled.h2`
    font-size:20px;
    text-align: left;
`;
const Indonesian = styled.div`
    background: #F6F5F4;
    /* padding:30px; */
    width: 100%;

    border-radius:14px;
    margin-bottom: 20px;
`;
const Box = styled.div`
    display: flex;
    align-items: center;
`;
const Imager = styled.div`
    width: 200px;
    /* height: 85px; */
    background-color: #EEECEB;
    /* padding: 0 50px; */
    border-radius:14px;
    margin-right: 20px;
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const Contents = styled.div`
    
`;
const Sub = styled.h3`
    text-align: left;
`;
const Para = styled.p`
    text-align: left;
`;
const Select = styled.h3`
text-align: left;
`;
const Roasting = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Pricebox = styled.div`
    background-color: #EEECEB;
    padding: 6px 35px;
    border-radius: 50px;
`;
const Price = styled.h4`
    font-size:14px
`;
const Volume = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;
const Roast = styled.h4`
`;
const Pack = styled.h4`
    text-align:left;
`;
const Volumebox = styled.div`
    background-color: #EEECEB;
    padding: 6px 48px;
    border-radius: 50px;
`;
const Add = styled.a`
    color: #fff;
    background-color: #FF7B00;
    display: block;
    padding: 15px;
    border-radius: 50px;
`;
const View = styled.a`
    background-color: #EEECEB;
    display: block;
    padding: 15px;
    border-radius: 50px;
`;



export default MenuItem;