import React from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import Button from 'components/Button/Button';
// STYLES
import { ModalWrapper, LinksWrapper, Link, HeroImage } from './Modal.styles';
// HELPERS
import { matchMedia, matchMediaMedium, matchMediaHorizontal } from 'helpers/matchMedia';
// IMAGES
import heroImage from 'assets/images/heroImageModal.svg';
import heroImageHorizontal from 'assets/images/heroImageModalHorizontal.svg';
import heroImageMedium from 'assets/images/heroImageModalMedium.svg';

const Modal = ({ toggleModal, toggleModalHandler, isEnglish }) => {
  return (
    <ModalWrapper className={toggleModal && 'toggle'} onClick={() => toggleModalHandler()}>
      <HeroImage src={matchMediaHorizontal ? heroImageHorizontal : matchMediaMedium ? heroImageMedium : matchMedia && heroImage} />
      <LinksWrapper>
        <Link text='ABOUT ME'>
          <Button text={!isEnglish ? 'ABOUT ME' : 'O MNIE'} to='ABOUT ME' toggleModalHandler={toggleModalHandler} />
        </Link>
        <Link text='PROJECTS'>
          <Button text={!isEnglish ? 'PROJECTS' : 'PROJEKTY'} to='PROJECTS' toggleModalHandler={toggleModalHandler} />
        </Link>
        <Link text='CONTACT'>
          <Button text={!isEnglish ? 'CONTACT' : 'KONTAKT'} to='CONTACT' toggleModalHandler={toggleModalHandler} />
        </Link>
      </LinksWrapper>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.bool.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
  isEnglish: PropTypes.bool.isRequired,
};

export default Modal;
