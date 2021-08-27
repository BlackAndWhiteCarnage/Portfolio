import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoAndNavWrapper = styled(motion.div)`
  height: 300px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 680px) {
    width: 80%;
    height: 45%;
    height: 60%;
    justify-content: space-around;
  }
`;

export const LogoImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  @media screen and (max-width: 680px) {
    width: 300px;
  }
`;

export const LogoLeftHalf = styled.img`
  position: absolute;
  background: ${({ theme }) => theme.colors.white};
  left: 0;
  z-index: 10;
  @media screen and (max-width: 680px) {
    width: 65%;
    height: 100px;
  }
`;

export const LogoRightHalf = styled(motion.img)`
  position: absolute;
  right: 0;
  @media screen and (max-width: 680px) {
    width: 33%;
    height: 100px;
  }
`;

export const Scroll = styled.img`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%);
  width: 25px;
  @media screen and (max-width: 680px) {
    top: 95%;
  }
`;

export const Navigation = styled.ul`
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

export const NavItem = styled(motion.li)`
  padding: 10px;
  cursor: pointer;
  position: relative;
  @media screen and (min-width: 1200px) {
    &::before {
      position: absolute;
      content: '${(props) => props.text}';
      top: -100%;
      left: 50%;
      transform: translate(-50%);
      font-size: 100px;
      white-space: nowrap;
      opacity: 0;
      font-weight: 400;
      transition: 0.5s ease;
      color: #efefef;
      z-index: -1;
      pointer-events: none;
    }
    &::after {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%);
      content: '';
      width: 100%;
      height: 100%;
      /* background: ${({ theme }) => theme.colors.black}; */
      border: 1px solid ${({ theme }) => theme.colors.black};
      opacity: 0;
      z-index: -1;
      transition: 0.5s ease;
      pointer-events: none;
    }
    &:hover {
      /* color: ${({ theme }) => theme.colors.white}; */
      transition: 0.5s ease;
      &::after {
        transition: 0.5s ease;
        height: 100%;
        opacity: 1;
      }
      &::before {
        transition: 0.5s ease;
        opacity: 1;
      }
    }
  }
`;

export const Line = styled(motion.div)`
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};
  @media screen and (max-width: 460px) {
    width: 100%;
    height: 1px;
  }
`;
