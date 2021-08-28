import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
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
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 680px) {
    width: 80%;
    height: 100%;
  }
`;

export const Form = styled(motion.form)`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const EmailSend = styled.div`
  position: absolute;
  top: -100%;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: ${({ theme }) => theme.colors.white}; */
  background: rgba(246, 246, 246, 0.9);
  text-align: center;
  transition: 0.5s ease;
  &.show {
    top: 0;
    transition: 0.5s ease;
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  margin-bottom: 40px;
  transition: 0.5s ease;
  &.VALID {
    background: ${({ theme }) => theme.colors.valid};
    transition: 0.5s ease;
  }
  &.ERROR {
    background: ${({ theme }) => theme.colors.error};
    transition: 0.5s ease;
    transform: scale(1.025);
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
  &.VALID {
    background: ${({ theme }) => theme.colors.valid};
    transition: 0.5s ease;
  }
  &.ERROR {
    background: ${({ theme }) => theme.colors.error};
    transition: 0.5s ease;
    transform: scale(1.025);
  }
`;

export const ButtonAndPersonalInfoWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 680px) {
    margin-bottom: 50px;
  }
`;

export const PersonalInfoWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Header = styled(motion.p)`
  white-space: nowrap;
  text-align: right;
`;

export const InfoWrapper = styled(motion.div)`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
  margin-left: 25px;
`;
