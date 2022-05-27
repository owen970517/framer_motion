import React from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion';

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`;

const Box = styled(motion.div)`
  display :grid;
  grid-template-columns : repeat(2,1fr);
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle =styled(motion.div)`
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
background-color : white;
height : 70px;
width:70px;
place-self :center;
border-radius:35px;
`

const boxVar = {
  start : {
    opacity :0,
    scale :0.5,
  },
  end : {
    scale:1,
    opacity :1,
    transition : {
      type:"spring",
      bounce : 0.5,
      duration :0.5,
      delayChildren : 0.5,
      staggerChildren :0.5,
    }
  },
}

const CircleVar = {
  start:{
    opacity :0,
    y:-10,
  },
  end :{
    opacity :1,
    y:10
  }
}

function Variants() {
    return (
        <Box variants={boxVar} initial="start" animate="end">
        <Circle variants={CircleVar}/>
        <Circle variants={CircleVar}/>
        <Circle variants={CircleVar}/>
        <Circle variants={CircleVar}/>
      </Box>
    )
}
export default Variants