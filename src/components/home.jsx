import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            Hello World
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dinoGame">Dinosaur Game</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default Home;