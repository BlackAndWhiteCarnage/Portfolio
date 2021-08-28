import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
`;

export const ProjectsSliderWrapper = styled.div`
  position: relative;
  height: 450px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  @media screen and (max-width: 680px) {
    width: 70%;
    height: 250px;
  }
`;

export const Project = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  left: 0;
  transition: 0.5s ease;
  transform: scale(0);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);

  &.show,
  &.next,
  &.prev {
    cursor: pointer;
    transition: 0.5s ease;
  }
  &.show {
    transform: scale(1);
    opacity: 1;
    left: 0;
    z-index: 20;
    @media screen and (min-width: 1200px) {
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  &.next,
  &.prev {
    opacity: 0.2;
    transform: scale(0.5);
    z-index: 10;
    @media screen and (min-width: 1200px) {
      &:hover {
        opacity: 0.4;
        transform: scale(0.55);
      }
    }
  }
  &.next {
    left: 100%;
    @media screen and (max-width: 1280px) {
      left: 50%;
    }
  }
  &.prev {
    left: -100%;
    @media screen and (max-width: 1280px) {
      left: -50%;
    }
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  pointer-events: none;
`;

export const ProjectTitle = styled.h2`
  position: absolute;
  top: 0;
  text-align: right;
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  pointer-events: none;
  text-transform: uppercase;
  opacity: 0;
  transition: 0.5s ease;
  font-size: ${({ theme }) => theme.fontSize.m};
  &.show {
    top: -60px;
    transition: 0.5s 0.5s ease;
    opacity: 1;
    @media screen and (max-width: 680px) {
      top: -45px;
    }
  }
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const SliderInfoWrapper = styled(motion.p)`
  position: absolute;
  bottom: -50px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 680px) {
    text-align: center;
  }
`;

export const IsSliderLockedInfo = styled(motion.p)`
  position: absolute;
  bottom: -100px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 680px) {
    text-align: center;
  }
`;

export const Header = styled(motion.h2)`
  margin-bottom: 60px;
`;
