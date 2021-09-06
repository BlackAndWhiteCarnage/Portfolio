import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* flex-direction: column; */
  margin-bottom: 150px;
`;

export const AboutMeWrapper = styled.div`
  position: relative;
  height: 600px;
  /* width: 80%; */
  width: 1300px;
  display: flex;
  justify-content: space-between;
  transition: 1s 0.5s ease;
  /* background: white; */
  @media screen and (max-width: 1500px) {
    width: 85%;
  }
  @media screen and (max-width: 680px) {
    width: 75%;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
  &.hide {
    transition: 0.5s ease;
    opacity: 0;
    transform: scale(0);
  }
`;

export const AboutMeWrapperPartOne = styled.div`
  width: 500px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: perspective(800px) rotateY(10deg) scale(1.1);
  max-width: 1200px;
  transition: 0.5s ease;
  @media screen and (max-width: 1500px) {
    width: 50%;
  }
  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

export const Header = styled.h4`
  width: 100%;
  margin-bottom: 20px;
  text-align: right;
  text-transform: uppercase;
  &.left {
    text-align: left;
  }
`;

export const MySkillsWrapper = styled.div`
  /* width: 600px; */
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: perspective(800px) rotateY(-10deg) scale(1.1);
  transition: 0.5s ease;
  @media screen and (min-width: 1200px) {
    &:hover {
      transform: rotateY(-5deg) scale(1.1) rotate(5deg);
      transition: 0.5s ease;
    }
  }
  @media screen and (max-width: 680px) {
    width: 100%;
    height: 500px;
    margin-top: 150px;
  }
`;

export const MySkills = styled.div`
  height: 550px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.l};
  @media screen and (max-width: 680px) {
    box-shadow: ${({ theme }) => theme.boxShadow.s};
  }
  background: ${({ theme }) => theme.colors.white};
  /* backdrop-filter: blur(5px); */
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
  /* height: 120px; */
`;
