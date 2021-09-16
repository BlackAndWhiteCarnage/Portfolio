import React, { useState } from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import Button from 'components/Button/Button';
import FormFeedback from 'components/FormFeedback/FormFeedback';
// ICONS
import send from 'assets/icons/send-icon.svg';
// STYLES
import { Wrapper, FormWrapper, Label, Input, Textarea } from './Form.styled';

const Form = ({ emailSend, setEmailSend }) => {
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
      setTimeout(() => {
        setEmailSend(false);
      }, 3000);
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
    <Wrapper>
      <FormWrapper className={emailSend && 'emailSend'}>
        <Label htmlFor='email'>EMAIL</Label>
        <Input
          onChange={emailHandler}
          name='email'
          id='email'
          className={`${feedback === 2 && !validEmail && 'ERROR'} ${feedback === 3 && !validEmail && 'ERROR'} ${validEmail && 'VALID'}`}
          value={emailValue}
        />
        <Label htmlFor='message'>MESSAGE</Label>
        <Textarea
          onChange={messageHandler}
          name='message'
          id='message'
          className={`${feedback === 2 && !validMessage && 'ERROR'} ${feedback === 4 && !validMessage && 'ERROR'} ${validMessage && 'VALID'}`}
          value={messageValue}
        />
        <Button text='SEND' icon={send} onClick={checkValid} />
      </FormWrapper>
      {/* --- FORM FEEDBACK POPOUTS --- */}
      <FormFeedback feedback={feedback} emailSend={emailSend} waiting={waiting} />
    </Wrapper>
  );
};

Form.propTypes = {
  emailSend: PropTypes.bool.isRequired,
  setEmailSend: PropTypes.func.isRequired,
};

export default Form;
