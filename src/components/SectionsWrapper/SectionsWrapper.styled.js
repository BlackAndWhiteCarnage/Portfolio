import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 110vh;
  height: auto;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
    min-height: 900px;
    padding-bottom: 250px;
  }
`;
