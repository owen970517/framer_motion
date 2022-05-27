import React, { useEffect, useRef } from 'react';
import styled from 'styled-components'
import { motion, useMotionValue , useTransform, useViewportScroll } from 'framer-motion';
import Gesture from './Gesture';
const Wrapper = styled(motion.div)`
  height: 500vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


const boxVar = {
  hover :{ rotateZ:90},
  click : {borderRadius:"100px"},
  dragging : {backgroundColor : 'rgb(46,60,70)' , transition: { duration:2}}
}


function Scroll() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x,[-800,800],[-360,360]);
  const gradient = useTransform(x , [-800,800] , ['linear-gradient(135deg,rgb(23,0,243),rgb(159,0,23))','linear-gradient(135deg,rgb(126,0,231),rgb(78,0,164))'])
  const {scrollYProgress} = useViewportScroll();
  const scale = useTransform(scrollYProgress , [0,1] , [1,5])
  return (
    <Wrapper style={{background:gradient}}>
      <Box style={{x , rotateZ,scale}} drag="x" dragSnapToOrigin/>
    </Wrapper>
  );
}

export default Scroll;
