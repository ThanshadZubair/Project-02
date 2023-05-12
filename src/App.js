import React from 'react'
import "./App.css"

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
      <MenuItem />
      {/* <Home /> */}
      <Bottom />
      
    </>
   
 );
      
}


export default App;