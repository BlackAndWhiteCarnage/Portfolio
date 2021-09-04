import React, { useState } from 'react';
// COMPONENTS
import Modal from 'components/Modal/Modal';
import PageTransition from 'components/PageTransition/PageTransition';
// ICONS
import facebook from 'assets/icons/facebook-icon.svg';
import github from 'assets/icons/github-icon.svg';
import back from 'assets/icons/back-icon.svg';
// STYLES
import { Wrapper, HamburgerMenu, Line, SocialMedia, Icon, LinesWrapper, BackIcon } from './Navigation.styles';

const Navigation = ({ toggleReadMore, setToggleReadMore, setViewProject, viewProject }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  console.log(toggleReadMore);

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
          <LinesWrapper
            className={`${viewProject.isToggled && 'hide'} ${toggleReadMore && 'hide'}`}
            onClick={() => {
              toggleModalHandler();
            }}
          >
            <Line className={toggleModal && 'toggle'} />
            <Line className={toggleModal && 'toggle'} />
            <Line className={toggleModal && 'toggle'} />
            <Line className={toggleModal && 'toggle'} />
          </LinesWrapper>
        </HamburgerMenu>
        <SocialMedia>
          <Icon src={facebook} id='active' />
          <Icon src={github} id='active' />
        </SocialMedia>
      </Wrapper>
      <Modal toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} />
      <PageTransition toggle={toggleModal} />
    </>
  );
};

export default Navigation;
