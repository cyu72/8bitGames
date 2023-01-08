import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';

function DinoGame() {

    const dinosaur = useRef(null);
    const cactus = useRef(null);
    let [isLife, setIsLife] = useState("isLife");

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true);
    }, []);

    const detectKeyDown = (e) => {
        if (e.keyCode == 32) {
            triggerJump();
        }
    }

    let [isJump, setIsJump] = useState("");

    let triggerJump = () => {
        if (isJump === "") {
            setIsJump("jump");
            setTimeout(function () {
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
        console.log(dinoBottom);
        console.log(cactusXpos);
        if (cactusXpos >= 20 && cactusXpos <= 40) {
            console.log("yes");
            if (dinoBottom < -110) {
                alert("Game Over!");
                //   score = 0;
                // reset position and score
            }
            else {
            }
        }
    })

    return (
        <React.Fragment>
            <div className="game">
                <div className={isJump} id="dino" ref={dinosaur}></div>
                <div id="cactus" ref={cactus}></div>
            </div>
        </React.Fragment>
    );
}

export default DinoGame;