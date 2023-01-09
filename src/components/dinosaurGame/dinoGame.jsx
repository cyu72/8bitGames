import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import floor from '../../imgs/ground.png';

function DinoGame() {

    const dinosaur = useRef(null);
    const cactus = useRef(null);
    let [isLife, setIsLife] = useState("isLife");
    let [score, setScore] = useState(0);

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true);
    });

    const detectKeyDown = (e) => {
        if (e.keyCode === 32) {
            triggerJump();
            if (isLife === "isLife"){
                setScore(score + 1);
            }
        }
    }

    let [isJump, setIsJump] = useState("");

    let triggerJump = () => {
        if (isJump === "") {
            setIsJump("jump");
            setTimeout(() => {
                setIsJump("");
            }, 350);
        }
    };

    let isAlive = setInterval(function () {
        let dinoBottom = 0;
        let cactusXpos = 0;
        if (document.readyState === "complete" || document.readyState === "loaded") {
            dinoBottom = parseInt(window.getComputedStyle(dinosaur.current).getPropertyValue("bottom"));
            cactusXpos = parseInt(window.getComputedStyle(cactus.current).getPropertyValue("left"));
        }

        if (cactusXpos >= 20 && cactusXpos <= 40) {
            if (dinoBottom < -110) {
                alert("Game Over!");
                setScore(0);
                // reset position
            }
        }
    })

    return (
        <React.Fragment>
            <div className="game">
                <div className={isJump} id="dino" ref={dinosaur}/>
                <div id="cactus" ref={cactus}/>
                <img src={floor} id="floor" alt='floor.png'/>
                <div id="score">{score}</div>
            </div>
        </React.Fragment>
    );
}

export default DinoGame;