import React from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import SectionsWrapper from 'components/SectionsWrapper/SectionsWrapper';
import SectionsContentWrapper from 'components/SectionsContentWrapper/SectionsContentWrapper';
import Form from 'components/Form/Form';
import PersonalInfo from 'components/PersonalInfo/PersonalInfo';

const Contact = ({ emailSend, setEmailSend, isEnglish }) => {
  return (
    <SectionsWrapper id='CONTACT'>
      <SectionsContentWrapper>
        <Form emailSend={emailSend} setEmailSend={setEmailSend} isEnglish={isEnglish} />
        <PersonalInfo isEnglish={isEnglish} />
      </SectionsContentWrapper>
    </SectionsWrapper>
  );
};

Contact.propTypes = {
  emailSend: PropTypes.bool.isRequired,
  setEmailSend: PropTypes.func.isRequired,
  isEnglish: PropTypes.bool.isRequired,
};

export default Contact;
