import React from 'react';
import styled from 'styled-components';
import logo from 'assets/icons/logo-icon.svg';
import scroll from 'assets/icons/scroll-icon.svg';
import { useScroll } from 'helpers/useScroll';
import { fade, slide } from 'assets/animations/animation';
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
  }
`;

const LogoImage = styled.img`
  width: 100%;
  height: auto;
`;

const Scroll = styled.img`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%);
  width: 25px;
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
        <LogoImage src={logo} />
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
