import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide, slideFromLeft } from 'assets/animations/animation';

const Wrapper = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 110vh;
  height: auto;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  transform: scale(0);
  &.sizeUp {
    transform: scale(1);
  }
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
    min-height: 900px;
    padding-bottom: 250px;
  }
`;

const SectionsWrapper = ({ children, id, welcomeScreen }) => {
  const [element, controls] = useScroll();

  return (
    <Wrapper id={id} variants={slide} animate={controls} initial='hidden' ref={element} className={!welcomeScreen && 'sizeUp'}>
      {/* <Wrapper id={id} className={!welcomeScreen && 'sizeUp'}> */}
      {children}
    </Wrapper>
  );
};

export default SectionsWrapper;
