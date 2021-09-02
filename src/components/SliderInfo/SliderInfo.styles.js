import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SliderInfoWrapper = styled(motion.p)`
  position: absolute;
  bottom: -65px;
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
  bottom: -115px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 680px) {
    text-align: center;
  }
`;