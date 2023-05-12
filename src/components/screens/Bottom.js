import React from 'react'
import {styled} from 'styled-components';
import Bills from './Bills';
import Beans from './Beans';

function Bottom() {
  return (
    <>
        <BottomContainer>
          <Beans />
          <Bills />
        </BottomContainer>
    </>
  )
}

const BottomContainer = styled.section`
    display: flex;
    
`;

export default Bottom;