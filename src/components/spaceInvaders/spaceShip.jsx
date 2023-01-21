import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { motion } from "framer-motion";
import "../../App.css";

const SpaceShip = forwardRef((props, ref) => {
  const spaceShipRef = useRef(null);
  let spacePos = useRef(null);
  let [nextPosX, setNextPosX] = useState();
  let nextPosXRef = useRef(null);
  nextPosXRef.current = nextPosX;

  useImperativeHandle(ref, () => {
    return {
      moveLeft() {
        spacePos.current = spaceShipRef.current.getBoundingClientRect();
        setNextPosX(spacePos.current.x - 1100);
        console.log("nextPosX: " + nextPosXRef.current);
      },

      moveRight() {
        spacePos.current = spaceShipRef.current.getBoundingClientRect();
        setNextPosX(spacePos.current.x - 1030);
        console.log("nextPosX: " + nextPosXRef.current);
      },

      checkPos() {
        spacePos.current = spaceShipRef.current.getBoundingClientRect();
      }
    };
  }, [nextPosX]);

    return ( 
      <motion.div 
        className="spaceShip"
        ref={spaceShipRef}
        animate={{x: nextPosXRef.current, scale: 1}} 
        inital={{x: 100}}>
      </motion.div>
    );
});

export default SpaceShip;