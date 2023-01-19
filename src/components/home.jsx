import React, { useEffect, useRef } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import "../App.css"
import dinoScreenshot from '../imgs/dinoScreenshot.png';
import { motion, useInView } from "framer-motion"

const Home = () => {

    const dinoScreenShotRef = useRef(null);
    useEffect(() => {
        document.body.style = 'background-image: linear-gradient(#FEB628, #FE2765, #9C0A70, #421576); background-repeat: no-repeat; background-size: 100vw 100vh; background-attachment: fixed;';
    },[])

    const bottomHeader = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14, color: 'white'}} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    return (  
        <div className="home-background">   
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet"/>
            </head>
            <h1 id="home-title">8-bit games</h1>
            <p id="home-desc">Bite sized games with chew sized fun.</p> {/* Want to move the two p elements closer to the h1 element */}
            <p id="home-desc">#Description2</p>
            <motion.img 
            ref={dinoScreenShotRef}
            id="dinoScreenshot"
            src={dinoScreenshot}
            animate={{scale: 1}}
            initial={{scale: 0}}/>
            <Card id="bottom-header" variant="outlined">{bottomHeader}</Card>
        </div>
    );
}
 
export default Home;