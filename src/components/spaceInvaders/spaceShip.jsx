import React, { forwardRef, useImperativeHandle } from 'react';
import { motion } from "framer-motion";
import "../../App.css";

const SpaceShip = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => {
    return {
      moveLeft() {
        console.log("left function");
      },
      moveRight() {
        console.log("right fucntion");
      }
    };
  }, []);

    return ( 
        <div id="spaceShip">
          <motion.div 
          animate={{y: 100, scale: 1}} 
          inital={{scale: 0}}>
          </motion.div>
        </div>
    );
});

export default SpaceShip;