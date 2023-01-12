import React from 'react';
import { useEffect, useState } from "react";
import "../../App.css";
import Alien from './alien';

const bodyStyle = {
    backgroundColor: "105,105,105"
}

function SpaceInvadersGame() {

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true);
    });
    
    const detectKeyDown = (e) => {
        if (e.keyCode === 32) {
            if (isAlive === "notAlive"){
                //start the game
                for (let i = 0; i < alienCount; i++){
                    setAliens([...aliens,
                        1
                    ]);
                }
                setIsAlive("isAlive");
                console.log(aliens);
            }
        }
    }

    let [alienCount, setAlienCount] = useState(10);
    let [isAlive, setIsAlive] = useState("notAlive");
    let [aliens, setAliens] = useState([]);

    return (
        <div className="spaceGame" playable={isAlive}>
            <div id="spaceShip"/>
            <Alien/>
        </div>
            // {/* <body style={bodyStyle} className="spaceBackground"/>  */}
    ); // why is it so fucking hard to add a goddamn background
}

export default SpaceInvadersGame;