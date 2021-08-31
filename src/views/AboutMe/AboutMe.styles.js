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

const sendEmail = keyframes`
0%{
  right: 0;
  top: 0;
}
25%{
  transform: scale(10);
  @media screen and (max-width: 680px) {
    transform: scale(5);
  }
}
50%{
  transform: skew(-30deg);
}
60%{
  transform: rotate(40deg);
}
75%{
  right: -300%;
  top: -300%;
  @media screen and (max-width: 680px) {
    right: -100%;
    top: -100%;
  }
}
100%{
  opacity: 0;
}
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
  &.emailSend {
    pointer-events: none;
    transition: 1s ease;
    opacity: 0.5 !important;
  }
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
    &.fly {
      position: absolute;
      z-index: 300;
      animation: ${sendEmail} 1.5s ease-in-out forwards infinite;
    }
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

export const ReadMoreWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  transition: 1s ease;
  z-index: 150;
  @media screen and (max-width: 680px) {
    overflow-y: scroll;
  }
  &.show {
    transition: 0.5s 0.5s ease;
    opacity: 1;
    pointer-events: all;
  }
`;

export const ReadMore = styled.div`
  min-width: 600px;
  min-height: 800px;
  margin: 100px;
`;
