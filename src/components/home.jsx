import React, { useEffect, useRef } from 'react';
import "../App.css"

const Home = () => {

    useEffect(() => {
        document.body.style = 'background-image: linear-gradient(#FEB628, #FE2765, #9C0A70, #421576); background-repeat: no-repeat; background-size: 100vw 100vh;';
    },[])

    return (  
        <div className="home-background">   
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"/>
            </head>
            <h1 id="home-title">8-bit games</h1>
        </div>
    );
}
 
export default Home;