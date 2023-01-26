import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { motion } from "framer-motion";
import "../../App.css";

const SpaceShip = forwardRef((props, ref) => {
  const spaceShipRef = useRef(null);
  let spacePos = useRef(null);
  let [nextPosX, setNextPosX] = useState();
  let nextPosXRef = useRef();
  nextPosXRef.current = nextPosX;

  useEffect(() => {
    spacePos.current = spaceShipRef.current.getBoundingClientRect();
    setNextPosX(spacePos.current.left);
    console.log(spacePos.current);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      moveLeft() {
        // spacePos.current = spaceShipRef.current.getBoundingClientRect(); //remove when isAlive is working
        setNextPosX(nextPosX => nextPosX - 100);
        console.log(nextPosXRef.current);
        // if between certain pixel counts, allow move x, else do not allow
      },

      moveRight() {
        spacePos.current = spaceShipRef.current.getBoundingClientRect(); //remove when isAlive is working
        // setNextPosX(spacePos.current.x - 720); 
      },

      checkPos() {
        // spacePos.current = spaceShipRef.current.getBoundingClientRect(); // some performance issues with this running constantly, maybe a set timeout?
      }
    };
  }, []);

  return ( 
    <motion.div 
      className="spaceShip"
      ref={spaceShipRef}
      animate={{x: nextPosXRef.current, scale: 1}} 
      inital={{}}
    />
  );
});

export default SpaceShip;