import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  @media screen and (max-width: 520px) {
    height: 1200px;
  }
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
    height: 600px;
  }
`;

export const ProjectsSliderWrapper = styled.div`
  position: relative;
  height: 450px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.5s 1s ease;
  @media screen and (max-width: 1366px) {
    width: 350px;
  }
  @media screen and (max-width: 520px) {
    width: 100%;
  }
  &.previewProject {
    transition: 0.5s ease;
    opacity: 0;
    transform: scale(0);
  }
`;
