import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import arrowRight from 'assets/icons/arrowRight-icon.svg';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide, slideFromLeft, headerAnimation } from 'assets/animations/animation';

export const Wrapper = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AboutMeWrapper = styled.div`
  height: auto;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  margin-bottom: 40px;
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

export const Header = styled(motion.h2)`
  margin-bottom: 60px;
`;

export const Article = styled(motion.article)`
  margin-bottom: 60px;
`;

export const Button = styled(motion.button)`
  position: relative;
  max-width: 220px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (max-width: 680px) {
    max-width: 180px;
  }
  img {
    max-height: 18px;
    transition: 0.5s ease;
    pointer-events: none;
    @media screen and (max-width: 680px) {
      max-height: 15px;
    }
  }
  span {
    white-space: nowrap;
    pointer-events: none;
  }
  &:hover {
    transition: 0.5s ease;
    img {
      transform: translateX(10px);
      transition: 0.5s ease;
    }
  }
`;

const AboutMe = () => {
  const [element, controls] = useScroll();

  return (
    <Wrapper variants={fade} animate={controls} initial='hidden' ref={element}>
      <AboutMeWrapper variants={slide}>
        <Header variants={headerAnimation}>ABOUT ME</Header>
        <Article variants={slide}>
          Oh shit it works! When i’ve started to learn JavaScript, it was hard. I mean, my bad that i’ve rushed a little bit rusted eduweb course and
          I didnt take more from the lessons that my notes. After a while I have started to understand all the principles in that programming
          language. From day to day it was more fun to learn it! My wife started to hate me after thousend of messages showing her the code and say
          “Look, finnaly I’ve found a bug!” Oh shit it works! When i’ve started to learn JavaScript, it was hard. I mean, my bad that i’ve rushed a
          little bit rusted eduweb course and I didnt take more from the lessons that my notes. After a while I have started to understand all the
          principles in that programming language. From day to day it was more fun to learn it! My wife started to hate me after thousend of messages
          showing her the code and say “Look, finnaly I’ve found a bug!”
        </Article>
        <Button variants={slide}>
          <p>KEEP READING</p>
          <img src={arrowRight} />
        </Button>
      </AboutMeWrapper>
    </Wrapper>
  );
};

export default AboutMe;
