import React, { useEffect, useRef } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import "../App.css"
import dinoScreenshot from '../imgs/dinoScreenshot.png';
import trex from '../imgs/trex.png'
import { motion, useInView, useAnimationControls } from "framer-motion"

const Home = () => {
    useEffect(() => {
        document.body.style = 'background-image: linear-gradient(#FEB628, #FE2765, #9C0A70, #421576); background-repeat: no-repeat; background-size: 100vw 100vh; background-attachment: fixed;';
    },[])

    const bottomHeader = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14, color: 'white'}} color="text.secondary" gutterBottom>
                    A Website Created by Christopher Yu
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    return (  
        <div className="home-background">   
            <h1 id="home-title">8-bit games</h1>
            <p id="home-desc">Bite sized games with chew sized fun.</p> {/* Want to move the two p elements closer to the h1 element */}
            <p id="home-desc">#Description2</p>

            <motion.img
            id="dinoIcon"
            src={trex}
            whileInView={{x:-150, opacity: 1}}
            viewport={{amount: 1}}
            initial={{scale: 1, opacity: 0}}/>

            <motion.h1 id="home-dino-text"
            whileInView={{opacity: 1, x:550}}
            viewport={{amount: 1}}
            initial={{opacity:0, x: 550}}>Google Dinosaur Game</motion.h1>

            <motion.img
            id="dinoScreenshot"
            src={dinoScreenshot}
            whileInView={{x:150}}
            viewport={{amount: 1}}
            initial={{scale: 1}}/>


            <Card id="bottom-header" variant="outlined">{bottomHeader}</Card>
        </div>
    );
}
 
export default Home;