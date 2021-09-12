import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const FormWrapper = styled(motion.form)`
  position: relative;
  min-width: 550px;
  min-height: 550px;
  transform: perspective(800px) rotateY(10deg) scale(1.1);
  transition: 0.5s ease;
  z-index: 1;
  margin: 0 35px;
  background-color: ${({ theme }) => theme.comicLayer.orangeColor};
  background-image: ${({ theme }) => theme.comicLayer.orangeBackground};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  border: 4px solid ${({ theme }) => theme.colors.black};
  @media screen and (max-width: 1366px) {
    min-width: 350px;
    min-height: 450px;
  }
  @media screen and (max-width: 760px) {
    min-height: 500px;
  }
  @media screen and (max-width: 520px) {
    max-width: unset;
    min-width: unset;
    min-height: 550px;
    width: 85%;
    margin: 0;
  }
`;

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const Label = styled(motion.label)`
  width: 100%;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Input = styled(motion.input)`
  position: relative;
  width: 100%;
  min-height: 35px;
  background: none;
  padding: 10px;
  border: none;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Bangers', cursive;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 100;
  transition: 0.5s ease;
  @media screen and (max-width: 1366px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  &:focus {
    outline: none;
    transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
    transition: 0.5s ease;
    background-color: ${({ theme }) => theme.comicLayer.whiteColor};
    background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
  }
  @media screen and (min-width: 1200px) {
    &:hover {
      outline: none;
      transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
      transition: 0.5s ease;
      background-color: ${({ theme }) => theme.comicLayer.whiteColor};
      background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
    }
  }
  &.VALID {
    background-color: ${({ theme }) => theme.comicLayer.greenColor};
    background-image: ${({ theme }) => theme.comicLayer.greenBackground};
    transition: 0.5s ease;
  }
  &.ERROR {
    background-color: ${({ theme }) => theme.comicLayer.redColor};
    background-image: ${({ theme }) => theme.comicLayer.redBackground};
    transition: 0.5s ease;
    pointer-events: none;
  }
`;

export const Textarea = styled(motion.textarea)`
  position: relative;
  width: 100%;
  min-height: 200px;
  background: none;
  padding: 10px;
  border: 4px solid ${({ theme }) => theme.colors.black};
  font-weight: 100;
  resize: none;
  transition: 0.5s ease;
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Bangers', cursive;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (max-width: 1366px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    min-height: 180px;
  }
  @media screen and (max-width: 1366px) {
    min-height: 150px;
  }
  &:focus {
    outline: none;
    transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
    transition: 0.5s ease;
    background-color: ${({ theme }) => theme.comicLayer.whiteColor};
    background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
  }
  @media screen and (min-width: 1200px) {
    &:hover {
      outline: none;
      transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
      transition: 0.5s ease;
      background-color: ${({ theme }) => theme.comicLayer.whiteColor};
      background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
    }
  }
  &.VALID {
    background-color: ${({ theme }) => theme.comicLayer.greenColor};
    background-image: ${({ theme }) => theme.comicLayer.greenBackground};
    transition: 0.5s ease;
  }
  &.ERROR {
    background-color: ${({ theme }) => theme.comicLayer.redColor};
    background-image: ${({ theme }) => theme.comicLayer.redBackground};
    transition: 0.5s ease;
    pointer-events: none;
  }
`;

export const ButtonAndPersonalInfoWrapper = styled(motion.div)`
  height: 100%;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: perspective(800px) rotateY(-10deg) scale(1.1);
  margin-right: 35px;
  @media screen and (max-width: 760px) {
    height: auto;
    width: 350px;
    justify-content: center;
    margin: 0;
  }
  @media screen and (max-width: 520px) {
    max-width: unset;
    width: 85%;
    margin: 0;
  }
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
    max-width: 300px;
    margin: 0;
  }
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
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: 0.5s ease;
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  border: 4px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.comicLayer.lightBlueColor};
  background-image: ${({ theme }) => theme.comicLayer.lightBlueBackground};
  animation: ${rotate} 4s infinite ease;
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
  min-width: 20px;
  max-width: 20px;
  margin: 0 15px;
  @media screen and (max-width: 680px) {
    margin: 0 10px;
  }
`;

const feedbackAnim = keyframes`
25%{
  transform: rotate(-5deg) scale(0.6);
}
75%{
  transform: rotate(5deg) scale(0.8);
}
`;

export const WaitingWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.2s ease;
  pointer-events: none;
  opacity: 0;
  img {
    z-index: 10;
    width: 100%;
    opacity: 1;
    height: 100%;
    animation: ${feedbackAnim} 2s infinite;
  }
  &.SHOW {
    pointer-events: all;
    background: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
  &.ERROR {
    opacity: 1;
    transition: 0.2s ease;
    background: rgba(0, 0, 0, 0.2);
  }
`;
