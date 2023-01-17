import React from 'react';
import { useEffect, useState } from "react";
import "../../App.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alien from './alien';

function SpaceInvadersGame() {

    const enemyMap = [
        {
            arr: ['A', 1, 2, 1, 3]
        },
        {
            arr: ['B', 1, 3, 1, 1]
        },
        {
            arr: ['C', 1, 1, 2, 1]
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

    let filterRowOne = (object) => {
        return (object.arr[0] === 'A' ? object : null);
        // Function Objective: Render the list if the first element is the corresponding letter
    }

    let filterRowTwo = (object) => {
        return (object.arr[0] === 'B' ? object : null);
    }

    let filterRowThree = (object) => {
        return (object.arr[0] === 'C' ? object : null);
    }

    let filterLetterOut = (object) => {
        return (typeof object === 'string' ? undefined : object);
    }

    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="auto"
        sx={{ 
            width: 900,
            height: 600,
            border: '3px solid black'}}>
            <Box 
            sx={{ flexGrow: 1 }}
            alignItems="center"
            justifyContent="center"
            margin="auto">
                <Grid container spacing={6}>
                    {enemyMap.filter(filterRowOne).map((item => item.arr.filter(filterLetterOut).map((alienHealth) => (
                        <Grid item xs={1}>
                            <Alien alienHealth={`/${alienHealth}`}/>
                        </Grid>
                    ))))}
                </Grid>
                <Grid container spacing={6}>
                    {enemyMap.filter(filterRowTwo).map((item => item.arr.filter(filterLetterOut).map((alienHealth) => (
                        <Grid item xs={1}>
                            <Alien alienHealth={`/${alienHealth}`}/>
                        </Grid>
                    ))))}
                </Grid>
                <Grid container spacing={6}>
                    {enemyMap.filter(filterRowThree).map((item => item.arr.filter(filterLetterOut).map((alienHealth) => (
                        <Grid item xs={1}>
                            <Alien alienHealth={`/${alienHealth}`}/>
                        </Grid>
                    ))))}
                </Grid>
            </Box>
            <div id="spaceShip"/>
        </Box>
            // {/* <body style={bodyStyle} className="spaceBackground"/>  */}
    );
}

export default SpaceInvadersGame;