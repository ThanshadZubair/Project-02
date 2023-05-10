import React from 'react'
import "./App.css"
// import Brand from './App.css/Appglass'
import SubHead from './components/includes/SubHead';
import Header from './components/includes/Header';
import { styled } from 'styled-components';


function App() {
  return (
    <>
      <Brand className="Appglass">
        <SubHead />
        <Header />
      </Brand>
    </>
   
 );
      
}
const Brand = styled.div``;

export default App;