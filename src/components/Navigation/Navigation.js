import React, { useEffect } from 'react';
// COMPONENTS
import Hamburger from 'components/Hamburger/Hamburger';
import SocialMedia from 'components/SocialMedia/SocialMedia';
// STYLES
import { Wrapper } from './Navigation.styles';

const Navigation = ({ toggleReadMore, toggleModal, toggleModalHandler, viewProject }) => {
  useEffect(() => {
    document.body.style.overflowY = `${toggleReadMore || viewProject.isToggled || toggleModal ? 'hidden' : 'scroll'}`;
  }, [toggleReadMore, viewProject, toggleModal]);

  return (
    <Wrapper>
      <Hamburger toggleReadMore={toggleReadMore} toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} viewProject={viewProject} />
      <SocialMedia />
    </Wrapper>
  );
};

export default Navigation;
