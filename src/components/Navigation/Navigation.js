import React, { useState } from 'react';
// COMPONENTS
import Modal from 'components/Modal/Modal';
import Slider from 'components/Slider/Slider';
// ICONS
import facebook from 'assets/icons/facebook-icon.svg';
import github from 'assets/icons/github-icon.svg';
// STYLES
import { Wrapper, HamburgerMenu, Line, SocialMedia, Icon } from './Navigation.styles';

const Navigation = ({ setToggleReadMore, setViewProject, viewProject }) => {
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
        <HamburgerMenu
          id='active'
          onClick={() => {
            closeOtherModalsHandler();
            toggleModalHandler();
          }}
        >
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
      <Modal toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} />
      <Slider toggle={toggleModal} />
    </>
  );
};

export default Navigation;
