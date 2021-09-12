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
// ICONS
import wrongEmail from 'assets/icons/wrongEmail-icon.svg';
import wrongMessage from 'assets/icons/wrongMessage-icon.svg';
import emptyForm from 'assets/icons/emptyForm-icon.svg';
import emailSendIcon from 'assets/icons/emailSend-icon.svg';
// STYLES
import {
  Wrapper,
  Form,
  Label,
  Input,
  Textarea,
  ButtonAndPersonalInfoWrapper,
  Header,
  InfoWrapper,
  Info,
  Icon,
  FeedbackImage,
  FormWrapper,
  WaitingWrapper,
} from 'views/Contact/Contact.styles';
import SectionsWrapper from 'components/SectionsWrapper/SectionsWrapper';
import SectionsContentWrapper from 'components/SectionsContentWrapper/SectionsContentWrapper';

const Contact = () => {
  const [element, controls] = useScroll();
  const [emailSend, setEmailSend] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [feedback, setFeedback] = useState(0);
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
    e.preventDefault();

    if (!validEmail && validMessage) {
      setFeedback(3);
    } else if (!validMessage && validEmail) {
      setFeedback(4);
    } else if (!validEmail && !validMessage) {
      setFeedback(2);
    }

    if (validEmail && validMessage) {
      setFeedback(1);
      sendEmail(e);
      return;
    }

    setTimeout(() => {
      setFeedback(0);
    }, 2000);
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
        setFeedback(5);
        setValidEmail(false);
        setValidMessage(false);
        setWaiting(false);
      }, 1500);
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

  console.log(emailSend);
  console.log(feedback);

  return (
    <SectionsWrapper id='CONTACT'>
      <SectionsContentWrapper>
        <FormWrapper>
          <Form variants={slide} className={emailSend && 'emailSend'}>
            <Label variants={slide}>EMAIL</Label>
            <Input
              variants={fade}
              onChange={emailHandler}
              name='email'
              className={`${feedback === 2 && !validEmail && 'ERROR'} ${feedback === 3 && !validEmail && 'ERROR'} ${validEmail && 'VALID'}`}
              value={emailValue}
            />
            <Label variants={slide}>MESSAGE</Label>
            <Textarea
              variants={fade}
              onChange={messageHandler}
              name='message'
              className={`${feedback === 2 && !validMessage && 'ERROR'} ${feedback === 4 && !validMessage && 'ERROR'} ${validMessage && 'VALID'}`}
              value={messageValue}
            />
            <Button
              text='SEND'
              icon={send}
              className={`${emailSend && 'fly'} ${feedback === 2 && 'deactive'} ${feedback === 3 && 'deactive'} ${feedback === 4 && 'deactive'}`}
              onClick={checkValid}
            />
          </Form>
          <WaitingWrapper className={feedback !== 0 && 'SHOW'}>
            {feedback === 2 ? (
              <img src={emptyForm} />
            ) : feedback === 4 ? (
              <img src={wrongMessage} />
            ) : feedback === 3 ? (
              <img src={wrongEmail} />
            ) : emailSend ? (
              <img src={emailSendIcon} />
            ) : (
              waiting && <img src={waitingIcon} />
            )}
          </WaitingWrapper>
        </FormWrapper>
        <ButtonAndPersonalInfoWrapper variants={slide} animate={controls} initial='hidden' ref={element}>
          <Header variants={fade}>PERSONAL INFO</Header>
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
      </SectionsContentWrapper>
    </SectionsWrapper>
  );
};

export default Contact;
