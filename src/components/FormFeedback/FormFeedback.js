import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import { Wrapper, FeedbackMessage } from './FormFeedback.styled';

const FormFeedback = ({ feedback, emailSend, waiting, isEnglish }) => {
  const displayFeedbackMessageHandler = () => {
    if (feedback === 2) {
      return !isEnglish ? 'Cmone, fields are empty!' : 'Serio? Nic nie wypełniłeś i chcesz wysłać formularz?';
    } else if (feedback === 4) {
      return !isEnglish ? "Don't be shy, write something!" : 'Nie wstydź się, napisz coś!';
    } else if (feedback === 3) {
      return !isEnglish ? 'Your email is incorrect!' : 'Email jest niepoprawny!';
    } else if (emailSend) {
      return !isEnglish ? 'Email send, ill respond as soon as i can!' : 'Email wysłany, odpowiem jak tylko go zobaczę!';
    } else if (waiting) {
      return !isEnglish ? 'Wait a sec...' : 'Chwileczkę...';
    }
  };

  return (
    <Wrapper className={feedback !== 0 && 'SHOW'}>
      <FeedbackMessage className={feedback !== 0 && 'SHOW'}>{displayFeedbackMessageHandler()}</FeedbackMessage>
    </Wrapper>
  );
};

FormFeedback.propTypes = {
  feedback: PropTypes.number,
  emailSend: PropTypes.bool.isRequired,
  waiting: PropTypes.bool.isRequired,
  isEnglish: PropTypes.bool.isRequired,
};

export default FormFeedback;
