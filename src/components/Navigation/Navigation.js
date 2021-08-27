import React, { useState } from 'react';
// COMPONENTS
import Modal from 'components/Modal/Modal';
// ICONS
import facebook from 'assets/icons/facebook-icon.svg';
import github from 'assets/icons/github-icon.svg';
// STYLES
import { Wrapper, HamburgerMenu, Line, SocialMedia, Icon, StyledDotBottom, StyledDotTop } from './Navigation.styles';

const Navigation = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <>
      <Wrapper>
        <HamburgerMenu id='active' onClick={toggleModalHandler}>
          <Line className={toggleModal && 'toggle'} />
          <Line className={toggleModal && 'toggle'} />
          <Line className={toggleModal && 'toggle'} />
          <Line className={toggleModal && 'toggle'} />
        </HamburgerMenu>
        <SocialMedia>
          <Icon src={facebook} id='active' />
          <Icon src={github} id='active' />
        </SocialMedia>
      </Wrapper>
      <Modal toggleModal={toggleModal} />
      <StyledDotTop className={toggleModal && 'toggle'} />
      <StyledDotBottom className={toggleModal && 'toggle'} />
    </>
  );
};

export default Navigation;
