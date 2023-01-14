import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import floor from '../../imgs/ground.png';
import { Shake } from 'reshake'
import anime from 'animejs/lib/anime.es.js';

function DinoGame() {

    const dinosaur = useRef(null);
    const cactus = useRef(null);
    let [isLife, setIsLife] = useState("isNotLife");
    let [score, setScore] = useState(0);
    let [animation, setAnimation] = useState("");
    let [isJump, setIsJump] = useState("");
    let [isLand, setIsLand] = useState("false");
    const isLifeRef = useRef(0);
    isLifeRef.current = isLife;
    const animationRef = useRef(0);
    animationRef.current = animation;
    const isLandRef = useRef(0);
    isLandRef.current = isLand;

    useEffect(() => {
        document.body.style = 'background-image: linear-gradient(#FEB628, #FE2765, #9C0A70, #421576); background-repeat: no-repeat; background-size: 100vw 100vh; overflow: hidden';
        document.addEventListener('keydown', detectKeyDown, true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            isAlive();
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const detectKeyDown = (e) => {
        if (e.keyCode === 32) {
            if (isLifeRef.current === 'isNotLife'){
                setAnimation("animation");
                setIsLife("isLife");
            }
            triggerJump();
        }
    }

    let triggerJump = () => {
        if (isJump === "") {
            setIsJump("jump");
            setIsLand("true");
            console.log(isLandRef);
            setTimeout(() => {
                if (isLifeRef.current === "isLife"){
                    setScore((score) => score + 1);
                }
                setIsJump("");
            }, 350);
            setIsLand("false");
        }
    };

    let isAlive = () => {
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
                setIsLand("false");
                setIsLife("isNotLife");
                setAnimation("");
                // reset position
            }
        }
    }

    return (
        <React.Fragment>
            <link rel="preconnect" href="https://fonts.googleapis.com"/><link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"/>
            <Shake active={isLandRef} dur={300}>
                <div className="dinoGame">
                    <h3 id={isLife === "isNotLife" ? "startScreen" : "doNotDisplayStart"}>Press space to start!</h3>
                    <h3 id="score">Score: {score}</h3>
                    <div className={isJump} id="dino" ref={dinosaur}/>
                    <div className={animation} id="cactus" ref={cactus}/>
                    <img src={floor} id="floor" alt='floor.png'/>
                </div>
            </Shake>
        </React.Fragment>
    );
}

export default DinoGame;