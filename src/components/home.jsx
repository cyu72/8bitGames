import React, { useEffect, useRef } from 'react';
import "../App.css"

const Home = () => {

    useEffect(() => {
        document.body.style = 'background-color: #696969;';
    },[])

    return (  
        <div className="home-background">   
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"/>
            </head>
            <h1 id="home-title">8 bit games</h1>
        </div>
    );
}
 
export default Home;