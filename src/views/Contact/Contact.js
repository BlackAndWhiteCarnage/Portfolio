import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import user from 'assets/icons/user-icon.svg';
import email from 'assets/icons/email-icon.svg';
import phone from 'assets/icons/phone-icon.svg';
import send from 'assets/icons/send-icon.svg';
import { Button } from 'views/AboutMe/AboutMe.styles';

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
  height: 620px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 680px) {
    width: 80%;
    height: 100%;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  width: 100%;
  font-weight: 400;
  margin-bottom: 15px;
`;

export const Input = styled.input`
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

export const Textarea = styled.textarea`
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

export const Header = styled.p`
  width: 50%;
  white-space: nowrap;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: 680px) {
    height: 150px;
  }
`;

export const Info = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const Icon = styled.img`
  min-width: 18px;
  min-height: 18px;
  margin-right: 25px;
`;

const Contact = () => {
  return (
    <Wrapper>
      <ContactWrapper>
        <Form>
          <Label>EMAIL</Label>
          <Input />
          <Label>MESSAGE</Label>
          <Textarea />
        </Form>
        <ButtonAndPersonalInfoWrapper>
          <Header>PERSONAL INFO</Header>
          <Button>
            <p>SEND</p>
            <img src={send} />
          </Button>
          <InfoWrapper>
            <Info>
              <Icon src={user} />
              <p>KRZYSZTOF REPSCH</p>
            </Info>
            <Info>
              <Icon src={email} />
              <p>KRZYS.REPSCH@GMAIL.COM</p>
            </Info>
            <Info>
              <Icon src={phone} />
              <p>603 312 504</p>
            </Info>
          </InfoWrapper>
        </ButtonAndPersonalInfoWrapper>
      </ContactWrapper>
    </Wrapper>
  );
};

export default Contact;
