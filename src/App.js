import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home'
import DinoGamePage from "./components/dinosaurGame/dinoGamePage.jsx";
import SpaceInvadersGame from "./components/spaceInvaders/spaceInvadersGame";
import BrickBreakerGame from "./components/brickBreaker/brickBreakerGame";

function App() {
  return (
    <div className='home'>
      {/* <canvas></canvas> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>{/* USE ELEMENT ATTRIBUTE TO REFER TO COMPONENTS*/}
          <Route path="/dinoGame" element={<DinoGamePage/>}/>
          <Route path="/spaceInvaders" element={<SpaceInvadersGame/>}/>
          <Route pat="/brickBreaker" element={<BrickBreakerGame/>}/>
        </Routes>      
      </Router>
      </div>
  );
}

export default App;
