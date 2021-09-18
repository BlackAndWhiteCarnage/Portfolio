import React from 'react';
import PropTypes from 'prop-types';
// ICONS
import wrongEmail from 'assets/icons/wrongEmail-icon.svg';
import wrongMessage from 'assets/icons/wrongMessage-icon.svg';
import emptyForm from 'assets/icons/emptyForm-icon.svg';
import emailSendIcon from 'assets/icons/emailSend-icon.svg';
import waitingIcon from 'assets/icons/waiting-icon.svg';
// STYLES
import { Wrapper } from './FormFeedback.styled';

const FormFeedback = ({ feedback, emailSend, waiting }) => {
  return (
    <Wrapper className={feedback !== 0 && 'SHOW'}>
      {feedback === 2 ? (
        <img src={emptyForm} alt='Form is empty icon' />
      ) : feedback === 4 ? (
        <img src={wrongMessage} alt='Wrong message icon' />
      ) : feedback === 3 ? (
        <img src={wrongEmail} alt='Wrong email icon' />
      ) : emailSend ? (
        <img src={emailSendIcon} alt='Email is send icon' />
      ) : (
        waiting && <img src={waitingIcon} alt='Sending email icon' />
      )}
    </Wrapper>
  );
};

FormFeedback.propTypes = {
  feedback: PropTypes.number,
  emailSend: PropTypes.bool.isRequired,
  waiting: PropTypes.bool.isRequired,
};

export default FormFeedback;
