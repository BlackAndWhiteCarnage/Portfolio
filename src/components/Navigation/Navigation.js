import React, { useState } from 'react';
// COMPONENTS
import Modal from 'components/Modal/Modal';
import PageTransition from 'components/PageTransition/PageTransition';
// ICONS
import facebook from 'assets/icons/facebook-icon.svg';
import github from 'assets/icons/github-icon.svg';
import back from 'assets/icons/back-icon.svg';
import hamburger from 'assets/icons/hamburger-icon.svg';
// STYLES
import { Wrapper, HamburgerMenu, SocialMedia, Icon, HamburgerWrapper, BackIcon, AccualHamburger, IconWrapper } from './Navigation.styles';

const Navigation = ({ toggleReadMore, setToggleReadMore, setViewProject, viewProject }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
    if (toggleModal) {
      closeOtherModalsHandler();
    }
  };

  const closeOtherModalsHandler = () => {
    setToggleReadMore(false);
    setViewProject({ ...viewProject, isToggled: false });
    setToggleModal(false);
  };

  return (
    <>
      <Wrapper>
        <HamburgerMenu id='active'>
          <HamburgerWrapper
            id='active'
            src={hamburger}
            className={`${viewProject.isToggled && 'toggle'} ${toggleModal && 'toggle'} ${toggleReadMore && 'toggle'}`}
          >
            <AccualHamburger
              src={hamburger}
              id='active'
              className={`${viewProject.isToggled && 'hide'} ${toggleModal && 'hide'} ${toggleReadMore && 'hide'}`}
              onClick={() => {
                toggleModalHandler();
              }}
            />
            <BackIcon
              src={back}
              id='active'
              className={`${viewProject.isToggled && 'show'} ${toggleModal && 'show'} ${toggleReadMore && 'show'}`}
              onClick={closeOtherModalsHandler}
            />
          </HamburgerWrapper>
        </HamburgerMenu>
        <SocialMedia>
          <IconWrapper id='active'>
            <Icon src={facebook} />
          </IconWrapper>
          <IconWrapper id='active'>
            <Icon src={github} />
          </IconWrapper>
        </SocialMedia>
      </Wrapper>
      <Modal toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} />
      <PageTransition toggle={toggleModal} />
    </>
  );
};

export default Navigation;
