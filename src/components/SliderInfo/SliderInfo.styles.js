import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: absolute;
  bottom: -350px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media screen and (max-width: 1000px) {
    bottom: -250px;
  }
  @media screen and (max-width: 680px) {
    height: 100px;
    bottom: -180px;
    p {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;

export const SliderInfoWrapper = styled(motion.p)`
  width: 100%;
  text-align: center;
  line-height: normal;
`;

export const IsSliderLockedInfo = styled(motion.p)`
  width: 100%;
  text-align: center;
  line-height: normal;
`;
