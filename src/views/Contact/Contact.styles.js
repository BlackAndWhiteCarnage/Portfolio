import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from 'assets/styles/theme';

export const Wrapper = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

export const ContactWrapper = styled.div`
  position: relative;
  height: 720px;
  width: 1000px;
  display: flex;
  /* flex-direction: column; */
  /* background: black; */
  justify-content: space-between;
  @media screen and (max-width: 1280px) {
    width: 85%;
  }
  @media screen and (max-width: 880px) {
    flex-direction: column;
    height: 1100px;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 150px;
  }
`;

export const FormWrapper = styled(motion.form)`
  position: relative;
  width: 55%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #106fca;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%230C64BE' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  transform: perspective(800px) rotateY(10deg) scale(1.1);
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  border: 3px solid ${({ theme }) => theme.colors.black};
  &.emailSend {
    opacity: 0.5;
    transition: 0.5s ease;
    pointer-events: none;
  }
  @media screen and (max-width: 880px) {
    height: 600px;
    width: 85%;
  }
`;

export const Form = styled(motion.form)`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const wait = keyframes`
0%{
}
50%{
  transform: rotate(360deg);
  opacity: 1;
}
100%{
}
`;

export const WaitingWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  left: 0;
  top: -100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;
  &.show {
    top: 0;
    opacity: 1;
    img {
      min-height: 18px;
      animation: ${wait} 1.5s infinite ease-in-out;
      opacity: 0.25;
    }
  }
`;

export const Label = styled(motion.label)`
  width: 100%;
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const Input = styled(motion.input)`
  position: relative;
  width: 100%;
  min-height: 40px;
  background: none;
  padding: 10px;
  border: none;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'Bangers', cursive;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 100;
  margin-bottom: 40px;
  transition: 0.5s ease;
  &:focus {
    outline: none;
    transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
    transition: 0.5s ease;
    background-color: #f6f6f6 !important;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%23CCCCCC' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  }
  @media screen and (min-width: 1200px) {
    &:hover {
      outline: none;
      transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
      transition: 0.5s ease;
      background-color: #f6f6f6 !important;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%23CCCCCC' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
    }
  }
  &.VALID {
    background-color: #a3ed0a !important;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%2343B104' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
    transition: 0.5s ease;
  }
  &.ERROR {
    background-color: #d62e2e;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%239B2122' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    transition: 0.5s ease;
    pointer-events: none;
  }
`;

export const Textarea = styled(motion.textarea)`
  position: relative;
  width: 100%;
  min-height: 250px;
  background: none;
  padding: 10px;
  border: 3px solid ${({ theme }) => theme.colors.black};
  font-weight: 100;
  resize: none;
  transition: 0.5s ease;
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'Bangers', cursive;
  color: ${({ theme }) => theme.colors.black};
  &:focus {
    outline: none;
    transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
    transition: 0.5s ease;
    background-color: #f6f6f6 !important;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%23CCCCCC' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  }
  @media screen and (min-width: 1200px) {
    &:hover {
      outline: none;
      transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
      transition: 0.5s ease;
      background-color: #f6f6f6 !important;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%23CCCCCC' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
    }
  }
  &.VALID {
    background-color: #a3ed0a !important;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%2343B104' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
    transition: 0.5s ease;
  }
  &.ERROR {
    background-color: #d62e2e;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%239B2122' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    transition: 0.5s ease;
    pointer-events: none;
  }
`;

export const ButtonAndPersonalInfoWrapper = styled(motion.div)`
  width: 40%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  transform: perspective(800px) rotateY(-10deg) scale(1.1) !important;
  @media screen and (max-width: 880px) {
    width: 65%;
  }
  @media screen and (max-width: 680px) {
    margin-bottom: 50px;
    width: 85%;
  }
`;

export const PersonalInfoWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Header = styled(motion.h4)`
  white-space: nowrap;
  text-align: right;
  width: 100%;
  margin-bottom: 50px;
`;

const rotate = keyframes`
25%{
  transform: rotate(-5deg);
}
75%{
  transform: rotate(5deg);
}
`;

export const InfoWrapper = styled(motion.div)`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: 0.5s ease;
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  border: 3px solid ${({ theme }) => theme.colors.black};
  background-color: #d62e2e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%239B2122' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  animation: ${rotate} 4s infinite ease;
  @media screen and (max-width: 680px) {
    height: 150px;
  }
`;

export const Info = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  p {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const Icon = styled.img`
  min-width: 25px;
  max-width: 25px;
  min-height: 25px;
  margin: 0 25px;
  @media screen and (max-width: 680px) {
    margin: 0 10px;
  }
`;

export const FeedbackImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.2s ease;
  transform: scale(1.3);
  pointer-events: none;
  &.ERROR {
    opacity: 1;
    transform: scale(1);
    transition: 0.2s ease;
  }
`;
