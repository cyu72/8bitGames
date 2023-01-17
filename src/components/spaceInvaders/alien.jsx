import '../../App.css';
import React, { useEffect, useState } from 'react';

function Alien(props) {
    let [rowId,setRowID] = useState("spaceInvader");

    useEffect(() => {
        setRowID("spaceInvader" + props.row);
        console.log(props.row)
    });

    return (  
        <div>
            <div id="spaceInvader/1" alienHealth={props.alienHealth} row={props.row}/>
        </div>
    );
}

export default Alien;