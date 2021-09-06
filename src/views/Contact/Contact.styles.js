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
  /* overflow: hidden; */
  transform: perspective(800px) rotateY(10deg) scale(1.1);
  box-shadow: ${({ theme }) => theme.boxShadow.l};
  border: 1px solid ${({ theme }) => theme.colors.black};
  @media screen and (max-width: 680px) {
    box-shadow: ${({ theme }) => theme.boxShadow.s};
  }
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
  font-weight: 400;
  margin-bottom: 15px;
`;

export const Input = styled(motion.input)`
  position: relative;
  width: 100%;
  min-height: 40px;
  background: none;
  padding: 10px;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.black};
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.black}; */
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  margin-bottom: 40px;
  transition: 0.5s ease;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.l};
  @media screen and (max-width: 680px) {
    box-shadow: ${({ theme }) => theme.boxShadow.s};
  }
  @media screen and (min-width: 1200px) {
    &:hover,
    &:focus {
      transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
      transition: 0.5s ease;
    }
  }
  &.VALID {
    background: ${({ theme }) => theme.colors.valid};
    transition: 0.5s ease;
  }
  &.ERROR {
    background: ${({ theme }) => theme.colors.error};
    transition: 0.5s ease;
  }
`;

export const Textarea = styled(motion.textarea)`
  position: relative;
  width: 100%;
  min-height: 250px;
  background: none;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  resize: none;
  transition: 0.5s ease;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.l};
  @media screen and (max-width: 680px) {
    box-shadow: ${({ theme }) => theme.boxShadow.s};
  }
  @media screen and (min-width: 1200px) {
    &:hover,
    &:focus {
      transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
      transition: 0.5s ease;
    }
  }
  &.VALID {
    background: ${({ theme }) => theme.colors.valid};
    transition: 0.5s ease;
  }
  &.ERROR {
    background: ${({ theme }) => theme.colors.error};
    transition: 0.5s ease;
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

export const InfoWrapper = styled(motion.div)`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: 0.5s ease;
  box-shadow: ${({ theme }) => theme.boxShadow.l};
  border: 1px solid ${({ theme }) => theme.colors.black};
  @media screen and (max-width: 680px) {
    box-shadow: ${({ theme }) => theme.boxShadow.s};
  }
  @media screen and (min-width: 1200px) {
    &:hover {
      transform: rotate(-5deg) !important;
      transition: 0.5s ease;
    }
  }
  @media screen and (max-width: 680px) {
    height: 150px;
  }
`;

export const Info = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;

export const Icon = styled.img`
  min-width: 18px;
  min-height: 18px;
  margin: 0 25px;
`;
