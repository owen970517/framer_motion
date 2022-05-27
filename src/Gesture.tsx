import React, { useRef } from 'react';
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
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled.div`
  width:600px;
  height:600px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 40px;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
`

const boxVar = {
  hover :{ rotateZ:90},
  click : {borderRadius:"100px"},
  dragging : {backgroundColor : 'rgb(46,60,70)' , transition: { duration:2}}
}


function Gesture() {
  const biggerRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref = {biggerRef}>
        <Box drag dragSnapToOrigin dragElastic={0} dragConstraints={biggerRef} variants={boxVar} whileHover="hover" whileDrag="dragging" whileTap="click">
        </Box>
      </BiggerBox>
    </Wrapper>
  );
}

export default Gesture;