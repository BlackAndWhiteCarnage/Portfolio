import React from 'react';
import PropTypes from 'prop-types';
// ICONS
import wrongEmail from 'assets/icons/wrongEmail-icon.svg';
import wrongEmailPL from 'assets/icons/wrongEmailPL-icon.svg';
import wrongMessage from 'assets/icons/wrongMessage-icon.svg';
import wrongMessagePL from 'assets/icons/wrongMessagePL-icon.svg';
import emptyForm from 'assets/icons/emptyForm-icon.svg';
import emptyFormPL from 'assets/icons/emptyFormPL-icon.svg';
import emailSendIcon from 'assets/icons/emailSend-icon.svg';
import emailSendIconPL from 'assets/icons/emailSendPL-icon.svg';
import waitingIcon from 'assets/icons/waiting-icon.svg';
import waitingIconPL from 'assets/icons/waitingPL-icon.svg';
// STYLES
import { Wrapper } from './FormFeedback.styled';

const FormFeedback = ({ feedback, emailSend, waiting, isEnglish }) => {
  return (
    <Wrapper className={feedback !== 0 && 'SHOW'}>
      {feedback === 2 ? (
        <img src={!isEnglish ? emptyForm : emptyFormPL} alt='Form is empty icon' />
      ) : feedback === 4 ? (
        <img src={!isEnglish ? wrongMessage : wrongMessagePL} alt='Wrong message icon' />
      ) : feedback === 3 ? (
        <img src={!isEnglish ? wrongEmail : wrongEmailPL} alt='Wrong email icon' />
      ) : emailSend ? (
        <img src={!isEnglish ? emailSendIcon : emailSendIconPL} alt='Email is send icon' />
      ) : (
        waiting && <img src={!isEnglish ? waitingIcon : waitingIconPL} alt='Sending email icon' />
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
