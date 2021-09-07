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
import { Wrapper, HamburgerMenu, Line, SocialMedia, Icon, HamburgerWrapper, BackIcon, AccualHamburger, IconWrapper } from './Navigation.styles';

const Navigation = ({ toggleReadMore, setToggleReadMore, setViewProject, viewProject }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  const closeOtherModalsHandler = () => {
    setToggleReadMore(false);
    setViewProject({ ...viewProject, isToggled: false });
  };

  return (
    <>
      <Wrapper>
        <HamburgerMenu id='active'>
          <BackIcon
            src={back}
            onClick={closeOtherModalsHandler}
            id='active'
            className={`${viewProject.isToggled && 'show'} ${toggleReadMore && 'show'}`}
          />
          <HamburgerWrapper
            id='active'
            src={hamburger}
            className={`${viewProject.isToggled && 'hide'} ${toggleReadMore && 'hide'}`}
            onClick={() => {
              toggleModalHandler();
            }}
          >
            <AccualHamburger src={hamburger} />
          </HamburgerWrapper>
        </HamburgerMenu>
        <SocialMedia>
          <IconWrapper className='facebook'>
            <Icon src={facebook} id='active' />
          </IconWrapper>
          <IconWrapper className='github'>
            <Icon src={github} id='active' />
          </IconWrapper>
        </SocialMedia>
      </Wrapper>
      <Modal toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} />
      <PageTransition toggle={toggleModal} />
    </>
  );
};

export default Navigation;
