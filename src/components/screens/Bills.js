import React from 'react'
import {styled} from 'styled-components';


function Bills() {
    return (
        <>
            <Container>Bills</Container>
        </>
    )
}

const Container = styled.section`
position: absolute;
top:20%;
right: 3%;
    width: 22%;
    background-color:pink;
`;
export default Bills;