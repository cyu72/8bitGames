import React from 'react';
import { useEffect, useState } from "react";
import "../../App.css";
import Alien from './alien';

function SpaceInvadersGame() {

    const enemyMap = [
        [1, 2, 1, 3, 1, 1],
        [1, 3, 1, 1, 1, 1],
        [1, 1, 2, 1, 3, 3]
    ]

    let [isAlive, setIsAlive] = useState("notAlive");

    useEffect(() => {
        document.body.style = 'background-image: linear-gradient(#FEB628, #FE2765, #9C0A70, #421576); background-repeat: no-repeat; background-size: 100vw 100vh; overflow: hidden';
        document.addEventListener('keydown', detectKeyDown, true);
    });
    
    const detectKeyDown = (e) => {
        if (e.keyCode === 32) {
            if (isAlive === "notAlive"){
                //start the game
                setIsAlive("Alive");

            }
        }
    }

    return (
        <div className="spaceGame" playable={isAlive}>
            <div id="spaceShip"/>
            <Alien/>
        </div>
            // {/* <body style={bodyStyle} className="spaceBackground"/>  */}
    );
}

export default SpaceInvadersGame;