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
  overflow: hidden;
  padding: 150px 0;
`;

export const AboutMeWrapper = styled.div`
  position: relative;
  height: 600px;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1500px) {
    width: 85%;
  }
  @media screen and (max-width: 680px) {
    width: 80%;
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
  z-index: 1;
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
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: perspective(800px) rotateY(-10deg) scale(1.1);
  transition: 0.5s ease;
  z-index: 1;
  @media screen and (max-width: 680px) {
    width: 100%;
    height: 350px;
    margin-top: 150px;
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

export const MySkills = styled.div`
  height: 550px;
  width: 100%;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  transition: 0.5s ease;
  animation: ${rotate} 3s infinite ease;
  background-color: #ffc10b !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%23FFAD00' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
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
  @media screen and (max-width: 1000px) {
    height: 140px;
  }
`;
