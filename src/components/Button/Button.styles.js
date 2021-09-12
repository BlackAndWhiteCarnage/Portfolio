import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

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

export const ButtonWrapper = styled(motion.button)`
  position: relative;
  max-width: 220px;
  margin: 5px 0;
  border: 4px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  font-family: 'Bangers', cursive;
  transition: 0.5s ease;
  background: ${({ theme }) => theme.comicLayer.yellowColor};
  background-image: ${({ theme }) => theme.comicLayer.yellowBackground};
  @media screen and (min-width: 1200px) {
    cursor: none;
  }
  &.deactive {
    pointer-events: none;
  }
  @media screen and (max-width: 1366px) {
    padding: 5px 10px;
  }
  @media screen and (min-width: 1000px) {
    /* &:focus { */
    &:hover {
      outline: none;
      transform: perspective(800px) rotateY(-20deg) scale(1.1) rotate(5deg) !important;
      background: ${({ theme }) => theme.comicLayer.greenColor};
      background-image: ${({ theme }) => theme.comicLayer.greenBackground};
      img {
        transform: translateX(20px) scale(2) !important;
        transition: 0.5s ease;
      }
      transition: 0.5s ease;
    }
  }
  &.emailSend {
    pointer-events: none;
    transition: 1s ease;
    opacity: 0.5 !important;
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px 30px;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  img {
    max-height: 35px;
    margin: 0 10px 0 5px;
    transition: 0.5s ease;
    pointer-events: none;
    &.fly {
      position: absolute;
      z-index: 300;
      animation: ${sendEmail} 1.5s ease-in-out forwards infinite;
    }
    @media screen and (max-width: 680px) {
      max-height: 30px;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  @media screen and (min-width: 1200px) {
    cursor: none;
  }
`;
