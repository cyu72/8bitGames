import '../../App.css';
import React, { useEffect, useState } from 'react';

function Alien(props) {
    return (  
        <div>
            <div id="spaceInvader/1" alienHealth={props.alienHealth}/>
        </div>
    );
}

export default Alien;