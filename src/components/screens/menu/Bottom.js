import React from "react";

import { styled } from "styled-components";

import Beans from "./Beans";
import MenuItem from "./MenuItem";

import Tea from "../../../Assets/images/Tea-fill.svg"
import Cake from "../../../Assets/images/Cake.svg"
import Bottle from "../../../Assets/images/Bottle.svg"
import Month from "../../../Assets/images/task -7-secnd-month-2.svg"


function Bottom({ beanItems, orders, setOrders, setBeanItems }) {

  const items = [
    {
        id:1,
        Icon: Tea,
        dish:"Coffee",
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
  return (
    <>
      <BottomContainer>
      <Beans items={items} />
      <MenuItem beanItems={beanItems} orders={orders} setOrders={setOrders} />
      </BottomContainer>
    </>
  );
}

const BottomContainer = styled.section`

`;
export default Bottom;

