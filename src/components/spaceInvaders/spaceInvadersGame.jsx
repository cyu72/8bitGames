import React from 'react';
import { useEffect, useState } from "react";
import "../../App.css";
import Alien from './alien';

function SpaceInvadersGame() {

    const enemyMap = [
        {
            row: 3, arr: [1, 2, 1, 3, 1, 1]
        },
        {
            row: 2, arr: [1, 3, 1, 1, 1, 1]
        },
        {
            row: 1, arr: [1, 1, 2, 1, 3, 3]
        }
        // [1, 2, 1, 3, 1, 1],
        // [1, 3, 1, 1, 1, 1],
        // [1, 1, 2, 1, 3, 3]
    ];

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
            <div>
                {enemyMap.map((item => item.arr.map((alienHealth) => (
                    <Alien row={`/${item.row}`} alienHealth={`/${alienHealth}`}/>
                ))))}
            </div>
        </div>
            // {/* <body style={bodyStyle} className="spaceBackground"/>  */}
    );
}

export default SpaceInvadersGame;