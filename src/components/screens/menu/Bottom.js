import React, { useState } from "react";

import { styled } from "styled-components";

import Beans from "./Beans";
import MenuItem from "./MenuItem";
import { items } from "../../data";




function Bottom({ beanItems, orders, setOrders, setBeanItems }) {

  const [category, setCategory] = useState(null)

 
  return (
    <>
      <BottomContainer>
      <Beans items={items} selectCategory={(category) => setCategory(category)} />
      <MenuItem selectedCategory={category} beanItems={beanItems} orders={orders} setOrders={setOrders} />
      </BottomContainer>
    </>
  );
}

const BottomContainer = styled.section`

`;
export default Bottom;

