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
`;

export const AboutMeWrapper = styled.div`
  height: auto;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  margin-bottom: 40px;
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

export const Header = styled(motion.h2)`
  margin-bottom: 60px;
`;

export const Article = styled(motion.article)`
  margin-bottom: 60px;
`;

export const Button = styled(motion.button)`
  position: relative;
  max-width: 220px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (max-width: 680px) {
    max-width: 180px;
  }
  img {
    max-height: 18px;
    transition: 0.5s ease;
    pointer-events: none;
    @media screen and (max-width: 680px) {
      max-height: 15px;
    }
  }
  span {
    white-space: nowrap;
    pointer-events: none;
  }
  &:hover {
    transition: 0.5s ease;
    img {
      transform: translateX(10px);
      transition: 0.5s ease;
    }
  }
`;
