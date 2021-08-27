import React from 'react';
import styled from 'styled-components';
import logoLeftPart from 'assets/icons/logoLeftPart-icon.svg';
import logoRightPart from 'assets/icons/logoRightPart-icon.svg';
import scroll from 'assets/icons/scroll-icon.svg';
import { useScroll } from 'helpers/useScroll';
import { fade, slide, slideFromLeft } from 'assets/animations/animation';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.section)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoAndNavWrapper = styled(motion.div)`
  height: 300px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 680px) {
    width: 80%;
    height: 45%;
    /* background: red; */
    height: 60%;
    justify-content: space-around;
  }
`;

const LogoImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  @media screen and (max-width: 680px) {
    width: 300px;
  }
`;

const LogoLeftHalf = styled.img`
  position: absolute;
  background: ${({ theme }) => theme.colors.white};
  left: 0;
  z-index: 10;
  @media screen and (max-width: 680px) {
    width: 65%;
    height: 100px;
  }
`;

const LogoRightHalf = styled(motion.img)`
  position: absolute;
  right: 0;
  @media screen and (max-width: 680px) {
    width: 33%;
    height: 100px;
  }
`;

const Scroll = styled.img`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%);
  width: 25px;
  @media screen and (max-width: 680px) {
    top: 95%;
  }
`;

const Navigation = styled.ul`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 460px) {
    flex-direction: column;
    height: 140px;
    width: auto;
  }
`;

const NavItem = styled(motion.li)`
  padding: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 1200px) {
    &::before {
      transition: 0.3s ease;
      content: '';
      position: absolute;
      bottom: -100%;
      left: 50%;
      transform: translate(-50%);
      opacity: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.white};
      z-index: -1;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      transition: 0.5s ease;
      &::before {
        bottom: 0;
        opacity: 1;
        background: ${({ theme }) => theme.colors.black};
      }
    }
  }
`;

const Line = styled(motion.div)`
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};
  @media screen and (max-width: 460px) {
    width: 100%;
    height: 1px;
  }
`;

const Home = () => {
  const [element, controls] = useScroll();

  return (
    <Wrapper variants={fade} animate={controls} initial='hidden' ref={element}>
      <LogoAndNavWrapper variants={slide}>
        <LogoImageWrapper>
          <LogoLeftHalf src={logoLeftPart} />
          <LogoRightHalf src={logoRightPart} variants={slideFromLeft} />
        </LogoImageWrapper>
        <Navigation>
          <NavItem id='active' variants={slide}>
            O MNIE
          </NavItem>
          <Line variants={fade} />
          <NavItem id='active' variants={slide}>
            PROJEKTY
          </NavItem>
          <Line variants={fade} />
          <NavItem id='active' variants={slide}>
            KONTAKT
          </NavItem>
        </Navigation>
      </LogoAndNavWrapper>
      <Scroll src={scroll} />
    </Wrapper>
  );
};

export default Home;
