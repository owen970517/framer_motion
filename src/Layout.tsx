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
  width: 400px;
  height: 400px;
  background-color: rgba(255,255,255,1);
  border-radius: 10px;
  display:flex;
  margin-left :20px;
  justify-content:center;
  align-items:center;
  font-size :18px;
  font-weight:bold;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color : #00a5ff;
  height :100px;
  width :100px;
`


function Layout() {
  const [click ,setClick] = useState(false);
  const toggle = () => {
    setClick(prev => !prev)
  }
  return (
    <Wrapper onClick={toggle} >
      <Box>
        { !click ?<Circle layoutId='circle' style={{borderRadius:50}}/> :null}
      </Box>
      <Box>
      { click ?<Circle layoutId='circle' style={{borderRadius:0 , scale : 2}}/> :null}
      </Box>
    </Wrapper>
  );
}

export default Layout;
