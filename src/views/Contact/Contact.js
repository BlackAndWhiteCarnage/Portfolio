import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import user from 'assets/icons/user-icon.svg';
import email from 'assets/icons/email-icon.svg';
import phone from 'assets/icons/phone-icon.svg';
import send from 'assets/icons/send-icon.svg';
import { Button } from 'views/AboutMe/AboutMe.styles';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide, headerAnimation } from 'assets/animations/animation';

export const Wrapper = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
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

const Contact = () => {
  const [element, controls] = useScroll();

  return (
    <Wrapper variants={slide} animate={controls} initial='hidden' ref={element}>
      <ContactWrapper>
        <Form variants={slide}>
          <Label variants={slide}>EMAIL</Label>
          <Input variants={fade} />
          <Label variants={slide}>MESSAGE</Label>
          <Textarea variants={fade} />
        </Form>
        <ButtonAndPersonalInfoWrapper>
          <Button variants={slide}>
            <p>SEND</p>
            <img src={send} />
          </Button>
          <Header variants={fade}>
            PERSONAL INFO <br />
            BELOW
          </Header>
          <InfoWrapper variants={slide}>
            <Info variants={slide}>
              <p>KRZYSZTOF REPSCH</p>
              <Icon src={user} />
            </Info>
            <Info variants={slide}>
              <p>KRZYS.REPSCH@GMAIL.COM</p>
              <Icon src={email} />
            </Info>
            <Info variants={slide}>
              <p>603 312 504</p>
              <Icon src={phone} />
            </Info>
          </InfoWrapper>
        </ButtonAndPersonalInfoWrapper>
      </ContactWrapper>
    </Wrapper>
  );
};

export default Contact;
