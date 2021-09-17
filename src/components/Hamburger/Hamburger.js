import React from 'react';
import PropTypes from 'prop-types';
// ICONS
import backIcon from 'assets/icons/back-icon.svg';
import hamburgerIcon from 'assets/icons/hamburger-icon.svg';
// STYLES
import { Wrapper, HamburgerWrapper, HamburgerIcon, BackIcon } from './Hamburger.styles';

const Hamburger = ({ toggleReadMore, toggleModal, toggleModalHandler, viewProject }) => {
  return (
    <Wrapper id='active'>
      <HamburgerWrapper
        id='active'
        className={`${viewProject && 'toggle'} ${toggleModal && 'toggle'} ${toggleReadMore && 'toggle'}`}
        onClick={() => {
          toggleModalHandler();
        }}
      >
        <HamburgerIcon src={hamburgerIcon} id='active' className={`${viewProject && 'hide'} ${toggleModal && 'hide'} ${toggleReadMore && 'hide'}`} />
        <BackIcon src={backIcon} id='active' className={`${viewProject && 'show'} ${toggleModal && 'show'} ${toggleReadMore && 'show'}`} />
      </HamburgerWrapper>
    </Wrapper>
  );
};

Hamburger.propTypes = {
  toggleReadMore: PropTypes.func,
  toggleModal: PropTypes.func.isRequired,
  toggleModalHandler: PropTypes.func,
  viewProject: PropTypes.bool,
};

export default Hamburger;
