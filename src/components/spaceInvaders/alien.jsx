import '../../App.css';
import React, { forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Alien = forwardRef((props, ref) => {
    const alienRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            startAttack(){
                
            }
        };
      }, []);

    return (  
        <motion.div 
        id="spaceInvader/1" 
        ref={alienRef} 
        alienhealth={props.alienHealth}
        animate={{y: 100}}
        />
    );
}); 

export default Alien;