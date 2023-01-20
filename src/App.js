import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ResponsiveAppBar from './components/appBar';
import Home from './components/home'
import DinoGamePage from "./components/dinosaurGame/dinoGamePage.jsx";
import SpaceInvadersGame from "./components/spaceInvaders/spaceInvadersGame";
import BrickBreakerGame from "./components/brickBreaker/brickBreakerGame";
import Solataire from "./components/Solataire/SolataireGame";

function App() {
  return (
    <div className='home'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet"/>
      </head>
      <Router>
        <ResponsiveAppBar/>  
        <Routes>
          <Route exact path="/" element={<Home/>}/>{/* USE ELEMENT ATTRIBUTE TO REFER TO COMPONENTS*/}
          <Route path="/Dinosaur Game" element={<DinoGamePage/>}/>
          <Route path="/Space Invaders" element={<SpaceInvadersGame/>}/>
          <Route path="/Brick Breaker" element={<BrickBreakerGame/>}/>
          <Route path="/Solataire" element={<Solataire/>}/>
        </Routes>      
      </Router>
    </div>
  );
}

export default App;
