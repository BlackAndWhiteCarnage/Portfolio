import React, { useState } from 'react';
import user from 'assets/icons/user-icon.svg';
import email from 'assets/icons/email-icon.svg';
import phone from 'assets/icons/phone-icon.svg';
import send from 'assets/icons/send-icon.svg';
import { Button } from 'views/AboutMe/AboutMe.styles';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide, headerAnimation } from 'assets/animations/animation';
// STYLES
import {
  Wrapper,
  ContactWrapper,
  Form,
  Label,
  Input,
  Textarea,
  ButtonAndPersonalInfoWrapper,
  Header,
  InfoWrapper,
  Info,
  Icon,
  EmailSend,
} from 'views/Contact/Contact.styles';

const Contact = () => {
  const [element, controls] = useScroll();
  const [emailSend, setEmailSend] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const emailHandler = (e) => {
    const valid = /\S+@\S+\.\S+/;
    if (valid.test(e.target.value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const messageHandler = (e) => {
    if (e.target.value.length >= 10) {
      setValidMessage(true);
    } else {
      setValidMessage(false);
    }
  };

  const checkValid = (e) => {
    if (validEmail && validMessage) {
      setFeedback(1);
      sendEmail(e);
    } else {
      setFeedback(2);
      setTimeout(() => {
        setFeedback(0);
      }, 2000);
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    if (validEmail && validMessage) {
      // alert('EMAIL SEND');
      setEmailSend(true);
      // emailjs.sendForm('service_pkn9ez9', 'template_btr6t4a', e.target, 'user_wfAnEXgFR6wa0u7anAPJf').then(
      //   (result) => {
      //     console.log(result.text);
      //     setEmailSend(true);
      //   },
      //   (error) => {
      //     console.log(error.text);
      //   }
      // );
    }
  }

  return (
    <Wrapper variants={slide} animate={controls} initial='hidden' ref={element}>
      <ContactWrapper>
        <Form variants={slide}>
          <Label variants={slide}>EMAIL</Label>
          <Input
            variants={fade}
            onChange={emailHandler}
            name='email'
            className={`${feedback === 2 && !validEmail && 'ERROR'} ${validEmail && 'VALID'}`}
          />
          <Label variants={slide}>MESSAGE</Label>
          <Textarea
            variants={fade}
            onChange={messageHandler}
            name='message'
            className={`${feedback === 2 && !validMessage && 'ERROR'} ${validMessage && 'VALID'}`}
          />
          <EmailSend className={emailSend && 'show'}>
            <p>Email send, I will reply as soon as I can!</p>
          </EmailSend>
        </Form>
        <ButtonAndPersonalInfoWrapper>
          <Button variants={slide} type='submit' onClick={checkValid} className={emailSend && 'emailSend'}>
            <p>SEND</p>
            <img src={send} className={emailSend && 'fly'} />
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
