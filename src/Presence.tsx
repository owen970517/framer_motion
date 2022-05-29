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
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


const boxVar = {
  initial : {
    opacity :0,
    scale:0
  },
  visible : {
    opacity :1,
    scale :1,
    rotateZ : 360,
  },
  leaving : {
    opacity :0,
    y : 10,
  }
}
const Svg = styled.svg`
  width:300px;
  height:300px;
  path {
    stroke :white;
    strokeWidth :2;
  }
`

function Presence() {
  const [show,setShow] = useState(true);
  const toggleShow =() => {
    setShow((prev) => !prev)
  }
//exit state는 element가 사라질 때  발생하는 애니메이션
  return (
    <Wrapper >
     <AnimatePresence> { show ? <Box variants={boxVar} initial="initial" animate ="visible" exit="leaving"/> : null}</AnimatePresence>
      <button onClick={toggleShow}>click</button>
    </Wrapper>
  );
}

export default Presence;
