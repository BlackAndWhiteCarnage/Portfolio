import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  position: relative;
  width: 100%;
  height: 120vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 100px;
`;

export const ProjectsSliderWrapper = styled.div`
  position: relative;
  height: 450px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 1s 0.5s ease;
  @media screen and (max-width: 1000px) {
    width: 450px;
  }
  @media screen and (max-width: 680px) {
    width: 70%;
  }
  &.previewProject {
    transition: 0.5s ease;
    opacity: 0;
    transform: scale(0);
  }
`;
