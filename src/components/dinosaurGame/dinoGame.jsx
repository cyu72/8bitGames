import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import floor from '../../imgs/ground.png';
import { ShakeHard } from 'reshake'
import anime from 'animejs/lib/anime.es.js';

function DinoGame() {

    const dinosaur = useRef(null);
    const cactus = useRef(null);
    let [isLife, setIsLife] = useState("isNotLife");
    let [score, setScore] = useState(0);
    let [animation, setAnimation] = useState("");
    let [isJump, setIsJump] = useState("");
    let [isLand, setIsLand] = useState(false);
    const isLifeRef = useRef(0);
    isLifeRef.current = isLife;
    const animationRef = useRef(0);
    animationRef.current = animation;

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true);
    }, []);

    const detectKeyDown = (e) => {
        if (e.keyCode === 32) {
            if (isLife === 'isNotLife'){
                setAnimation("animation");
                setIsLife("isLife");
            }
            triggerJump();
        }
    }

    let triggerJump = () => {
        if (isJump === "" && isLand === false) {
            console.log(cactus.current.className);
            setIsJump("jump");
            setIsLand(true);
            setTimeout(() => {
                if (isLife === "isLife"){
                    setScore((score) => score + 1);
                }
                setIsJump("");
            }, 350);
            setIsLand(false);
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
                setIsLand(false);
                setIsLife("isNotLife");
                setAnimation("");
                // reset position
            }
        }
    })

    return (
        <React.Fragment>
            <link rel="preconnect" href="https://fonts.googleapis.com"/><link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"/>
            <ShakeHard active={isLand} dur={300}>
                <div className="dinoGame">
                    <h3 id="score">Score: {score}</h3>
                    <div className={isJump} id="dino" ref={dinosaur}/>
                    <div className={animation} id="cactus" ref={cactus}/>
                    <img src={floor} id="floor" alt='floor.png'/>
                </div>
            </ShakeHard>
        </React.Fragment>
    );
}

export default DinoGame;