import React, { useEffect } from 'react';
// COMPONENTS
import Hamburger from 'components/Hamburger/Hamburger';
import SocialMedia from 'components/SocialMedia/SocialMedia';
// STYLES
import { Wrapper } from './Navigation.styles';

// prop types

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

export default Navigation;
