import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

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
  min-width: 120px;
  max-width: 220px;
  padding: 10px 20px;
  border: 3px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: none;
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  font-family: 'Bangers', cursive;
  transition: 0.5s ease;
  &.deactive {
    pointer-events: none;
  }
  @media screen and (min-width: 1000px) {
    &:hover,
    &:focus {
      outline: none;
      transform: perspective(800px) rotateY(-20deg) scale(1.1) rotate(5deg) !important;
      background-color: #a3ed0a !important;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%2343B104' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
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
  @media screen and (max-width: 680px) {
    max-width: 180px;
  }
  a {
    width: 100%;
    display: flex;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p {
    pointer-events: none;
  }
  img {
    max-height: 35px;
    margin-left: 15px;
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
  &:hover {
  }
`;
