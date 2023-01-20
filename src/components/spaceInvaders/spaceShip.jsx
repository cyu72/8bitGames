import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { motion } from "framer-motion";
import "../../App.css";

const SpaceShip = forwardRef((props, ref) => {
  const spaceShipRef = useRef(null);
  let spacePos = useRef(null);
  

  // useEffect(() =>{
  //   spacePos.current = spaceShipRef.current.getBoundingClientRect();
  //   console.log(spacePos.current);
  // }, [spacePos.current]);

  useImperativeHandle(ref, () => {
    return {
      moveLeft() {
        console.log("left function");
      },

      moveRight() {
        console.log("right fucntion");
      },

      checkPos() {
        spacePos.current = spaceShipRef.current.getBoundingClientRect();
      }
    };
  }, []);

    return ( 
      <motion.div 
        className="spaceShip"
        ref={spaceShipRef}
        animate={{y: 100, scale: 1}} 
        inital={{scale: 0}}>
      </motion.div>
    );
});

export default SpaceShip;