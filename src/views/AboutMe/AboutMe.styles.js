import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const AboutMeWrapperPartOne = styled(motion.div)`
  min-width: 350px;
  max-width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: perspective(800px) rotateY(10deg) scale(1.1);
  z-index: 1;
  margin: 0 35px;
  @media screen and (max-width: 1366px) {
    height: 350px;
    max-width: 300px;
  }
  @media screen and (max-width: 760px) {
    width: 350px;
    height: auto;
  }
  @media screen and (max-width: 520px) {
    max-width: unset;
    min-width: unset;
    width: 85%;
    margin: 0;
  }
`;

export const Header = styled.h4`
  width: 100%;
  margin-bottom: 40px;
  text-align: right;
  text-transform: uppercase;
  &.left {
    text-align: left;
  }
`;

export const MySkillsWrapper = styled(motion.div)`
  min-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: perspective(800px) rotateY(-10deg) scale(1.1);
  z-index: 1;
  margin-right: 35px;
  @media screen and (max-width: 1366px) {
    min-width: 300px;
  }
  @media screen and (max-width: 760px) {
    width: 350px;
    margin-top: 100px;
  }
  @media screen and (max-width: 520px) {
    height: 400px;
    min-width: unset;
    width: 85%;
  }
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
    height: auto;
    margin-top: 130px;
  }
`;

const rotate = keyframes`
25%{
  transform: rotateY(5deg) scale(0.95) rotateX(-15deg);
}
}
75%{
  transform: rotateY(5deg) scale(1) rotate(2deg);
}
`;

export const MySkills = styled.ul`
  width: 100%;
  max-width: 400px;
  height: 90%;
  transition: 0.5s ease;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  animation: ${rotate} 3s infinite ease;
  background-color: ${({ theme }) => theme.comicLayer.orangeColor};
  background-image: ${({ theme }) => theme.comicLayer.orangeBackground};
  transition: 0.5s ease;
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
  }
`;

export const Skill = styled.li`
  width: auto;
  padding: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  @media screen and (max-width: 1366px) {
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const Article = styled(motion.article)`
  margin-bottom: 30px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 520px) {
    min-height: 130px;
  }
`;
