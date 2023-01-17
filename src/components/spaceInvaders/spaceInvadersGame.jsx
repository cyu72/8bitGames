import React from 'react';
import { useEffect, useState } from "react";
import "../../App.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alien from './alien';

function SpaceInvadersGame() {

    const enemyMap = [
        {
            row: 3, arr: [1, 2, 1]
        },
        {
            row: 2, arr: [1, 3, 1]
        },
        {
            row: 1, arr: [1, 1, 2]
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
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="auto"
        sx={{ 
            left: 500,
            width: 900,
            height: 600,
            border: '3px solid black'}}>
            {/* <div>
            {enemyMap.map((item => item.arr.map((alienHealth) => (
                <Alien row={`/${item.row}`} alienHealth={`/${alienHealth}`}/>
            ))))}
            </div> */}
            <Box 
            sx={{ flexGrow: 1 }}
            alignItems="center"
            justifyContent="center">
                <Grid container spacing={6}>
                    <Grid item xs={1}>
                        <Alien id="spaceInvader/1"/>
                    </Grid>
                    <Grid item xs={1}>
                        <Alien id="spaceInvader/1"/>
                    </Grid>
                    <Grid item xs={1}>
                        <Alien id="spaceInvader/1"/>
                    </Grid>
                    <Grid item xs={1}>
                        <Alien id="spaceInvader/1"/>
                    </Grid>
                </Grid>
            </Box>
            <div id="spaceShip"/>
        </Box>
            // {/* <body style={bodyStyle} className="spaceBackground"/>  */}
    );
}

export default SpaceInvadersGame;