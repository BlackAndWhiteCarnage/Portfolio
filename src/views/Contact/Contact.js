import React, { useState } from 'react';
import user from 'assets/icons/user-icon.svg';
import email from 'assets/icons/email-icon.svg';
import phone from 'assets/icons/phone-icon.svg';
import send from 'assets/icons/send-icon.svg';
import waitingIcon from 'assets/icons/waiting-icon.svg';
// COMPONENTS
import Button from 'components/Button/Button';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide } from 'assets/animations/animation';
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
  WaitingWrapper,
} from 'views/Contact/Contact.styles';

const Contact = () => {
  const [element, controls] = useScroll();
  const [emailSend, setEmailSend] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [waiting, setWaiting] = useState(false);

  const emailHandler = (e) => {
    setEmailValue(e.target.value);

    const valid = /\S+@\S+\.\S+/;
    if (valid.test(e.target.value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const messageHandler = (e) => {
    setMessageValue(e.target.value);

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
      setWaiting(true);
      setTimeout(() => {
        setEmailValue('');
        setMessageValue('');
        setEmailSend(true);
        setValidEmail(false);
        setValidMessage(false);
        setWaiting(false);
      }, 2500);
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
    <Wrapper id='CONTACT'>
      <ContactWrapper>
        <Form variants={slide} className={emailSend && 'emailSend'}>
          <Label variants={slide}>EMAIL</Label>
          <Input
            variants={fade}
            onChange={emailHandler}
            name='email'
            className={`${feedback === 2 && !validEmail && 'ERROR'} ${validEmail && 'VALID'}`}
            value={emailValue}
          />
          <Label variants={slide}>MESSAGE</Label>
          <Textarea
            variants={fade}
            onChange={messageHandler}
            name='message'
            className={`${feedback === 2 && !validMessage && 'ERROR'} ${validMessage && 'VALID'}`}
            value={messageValue}
          />
        </Form>
        <ButtonAndPersonalInfoWrapper variants={slide} animate={controls} initial='hidden' ref={element}>
          {/* <Button variants={slide} type='submit' onClick={checkValid} className={emailSend && 'emailSend'}>
            <p>SEND</p>
            <img src={send} className={emailSend && 'fly'} />
            <WaitingWrapper className={waiting && 'show'}>
              <p>WAIT</p>
              <img src={waitingIcon} />
            </WaitingWrapper>
          </Button> */}
          <Button text='SEND' icon={send} className={emailSend && 'fly'} />
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
