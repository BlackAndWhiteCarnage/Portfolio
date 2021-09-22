import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import Hamburger from 'components/Hamburger/Hamburger';
import SocialMedia from 'components/SocialMedia/SocialMedia';
// STYLES
import { Wrapper } from './Navigation.styles';

const Navigation = ({ toggleReadMore, toggleModal, toggleModalHandler, viewProject, setIsEnglish, isEnglish }) => {
  useEffect(() => {
    document.body.style.overflowY = `${toggleReadMore || viewProject || toggleModal ? 'hidden' : 'scroll'}`;
  }, [toggleReadMore, viewProject, toggleModal]);

  return (
    <Wrapper>
      <Hamburger toggleReadMore={toggleReadMore} toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} viewProject={viewProject} />
      <SocialMedia setIsEnglish={setIsEnglish} isEnglish={isEnglish} />
    </Wrapper>
  );
};

Navigation.propTypes = {
  toggleReadMore: PropTypes.bool.isRequired,
  toggleModal: PropTypes.bool.isRequired,
  toggleModalHandler: PropTypes.func,
  viewProject: PropTypes.bool.isRequired,
  setIsEnglish: PropTypes.func,
  isEnglish: PropTypes.bool.isRequired,
};

export default Navigation;
