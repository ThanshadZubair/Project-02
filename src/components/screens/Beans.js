import React from 'react'
import {styled} from 'styled-components';
import Tea from "../../Assets/images/tea.svg"
import Cake from "../../Assets/images/Cake.svg"
import Bottle from "../../Assets/images/Bottle.svg"
import Month from "../../Assets/images/task -7-secnd-month-2.svg"

const Items = [
  {
      id:1,
      Icon: Tea,
      dish:"coffee",
  },
  {
      id:2,
      Icon: Tea,
      dish:"Tea",
    
  },
  {
      id:3,
      Icon: Cake,
      dish:"Cakes",
  },
  
  {
      id:4,
      Icon: Bottle,
      dish:"Bundles",
  },
  {
      id:5,
      Icon: Month,
      dish:"Snack",
  },
  
];


function Beans() {
  return (
    <>
        <Content>
          <TopContainer>
            <Coffe>
            {Items.map((item) => (

              <Item key={item.id}>
                <Box>
                  <ImgCoffee src={item.Icon} alt='Image' />
                </Box>
                <Dish>{item.dish}</Dish>
              </Item>
              ))}

            </Coffe>
          </TopContainer>
          
        </Content>
    </>
  )
}

const Content = styled.section`
position: absolute;
top: 15%;
left: 10%;
  width: 60%;
  padding:30px 30px 30px 0;
`;
const TopContainer = styled.div`
  
`;
const Coffe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Item = styled.div`
  background: #F6F5F4;
  width: 10%;
  border-radius:50px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  
`;
const Box = styled.span`
  width: 30px;
  height: 30px;
  padding:5px;
  margin-right: 5px;
  border-radius:50px;
  background: #EEECEB;
  display: inline-block;
`;
const ImgCoffee = styled.img`
  
`;
const Dish = styled.span`
  
`;
export default Beans;