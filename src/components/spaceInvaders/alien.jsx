import '../../App.css';
import React from 'react';

function Alien(props) {
    return (  
        <div>
            <div id="spaceInvader" alien={props.alienNum}/>    
        </div>
    );
}

export default Alien;