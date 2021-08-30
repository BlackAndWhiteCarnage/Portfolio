import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { headerAnimation } from 'assets/animations/animation';

const Header = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  h1 {
    color: #eaeaea;
    text-align: center;
    font-size: 5vw;
    writing-mode: vertical-rl;
  }
  @media screen and (max-width: 680px) {
    height: 100%;
  }
`;

const SectionHeader = ({ text }) => {
  return (
    <Header variants={headerAnimation}>
      <h1>{text}</h1>
    </Header>
  );
};

export default SectionHeader;
