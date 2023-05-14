import React from 'react'
import "./App.css"
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Top from './components/screens/Top';
import MenuItem from './components/screens/MenuItem';
import Bottom from './components/screens/Bottom';
import Sidebar from './components/screens/SideBar';




function App() {
  return (
    <>
    <div className='Appglass'> 
      <Sidebar />
      <Top />
    </div>
    
    {/* <Route path="/" element={} /> */}
      <MenuItem />
      {/* <Home /> */}
      <Bottom />
      
    </>
   
 );
      
}


export default App;