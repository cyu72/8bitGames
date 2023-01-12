import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <canvas></canvas>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dinoGame">Dinosaur Game</Link>
                </li>
                <li>
                    <Link to="/spaceInvaders">Space Invaders</Link>
                </li>
                <li>
                    <Link to="/brickBreaker">Brick Breaker</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default Home;