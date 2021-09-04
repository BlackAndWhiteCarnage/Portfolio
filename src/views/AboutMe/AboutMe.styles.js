import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  position: relative;
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
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  &.hide {
    transition: 0.5s ease;
    opacity: 0;
    transform: scale(0);
  }
`;

export const Article = styled(motion.article)`
  margin-bottom: 60px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 120px;
`;
