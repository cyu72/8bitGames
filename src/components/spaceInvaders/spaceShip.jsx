import React, { forwardRef, useImperativeHandle } from 'react';
import { motion } from "framer-motion";
import "../../App.css";

function SpaceShip(props, ref) {

    useImperativeHandle(ref, () => ({
        log() {
          console.log("child function");
        }
      }));
    

    return ( 
        <div id="spaceShip">

        </div>
    );
}

export default SpaceShip;