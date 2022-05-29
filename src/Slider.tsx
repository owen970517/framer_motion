import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion';
import Gesture from './Gesture';
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,1);
  border-radius: 10px;
  position:absolute;
  display:flex;
  top:100px;
  justify-content:center;
  align-items:center;
  font-size :18px;
  font-weight:bold;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


const boxVar = {
  entry:(back:boolean) => ({
      x: back ? 500 : -500,
      opacity :0,
      scale:0,
  }),
  center:{
    x:0,
    opacity:1,
    scale:1,
    transition : {duration:1}
  },
  exit:(back:boolean) => ({
    x: back ? -500 : 500,
    opacity:0,
    scale:0,
    transition : {duration:1}
  })
}


function Slider() {
  const [visible, setVisible] =useState(1);
  const [back,setBack] = useState(false);
  const next = () => {
    setBack(false);
    setVisible(prev => prev ===10 ? 1 : prev+1);
  }
  const prev = () => {
    setBack(true);
    setVisible(prev => prev ===1 ? 10 : prev-1);
  }
  return (
    <Wrapper >
      <AnimatePresence custom={back}>
        <Box variants={boxVar} custom={back} initial="entry" animate ="center" exit="exit"  key={visible}>
          {visible}
          </Box> : null
     
      </AnimatePresence>
      <button onClick={next}>next</button>
      <button onClick={prev}>prev</button>
    </Wrapper>
  );
}

export default Slider;