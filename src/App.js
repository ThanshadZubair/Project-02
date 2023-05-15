import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/screens/MainPage";

function App() {


  
  return (
    <Router>
      <MainPage />
    </Router>
  );
}

export default App;
