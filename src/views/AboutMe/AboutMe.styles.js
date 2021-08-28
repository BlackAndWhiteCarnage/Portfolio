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

export const ButtonsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 120px;
`;

export const Button = styled(motion.button)`
  position: relative;
  min-width: 120px;
  max-width: 220px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  white-space: nowrap;
  @media screen and (max-width: 680px) {
    max-width: 180px;
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }
  p {
    pointer-events: none;
  }
  img {
    max-height: 25px;
    margin-left: 15px;
    transition: 0.5s ease;
    pointer-events: none;
    @media screen and (max-width: 680px) {
      max-height: 15px;
    }
  }
  &:hover {
    img {
      transform: translateX(5px) scale(1.2);
      transition: 0.5s ease;
    }
  }
`;
