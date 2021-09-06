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
  border: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  &.AboutMe {
    transition: 0.5s ease;
    @media screen and (min-width: 1200px) {
      &:hover {
        transform: perspective(800px) rotateY(-20deg) scale(1.1) rotate(5deg) !important;
        img {
          transform: scale(2) translateX(15px);
        }
        transition: 0.5s ease;
      }
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
