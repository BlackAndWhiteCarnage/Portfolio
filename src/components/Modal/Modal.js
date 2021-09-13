import React from 'react';
// COMPONENTS
import Button from 'components/Button/Button';
// STYLES
import { ModalWrapper, LinksWrapper, Link, HeroImage } from './Modal.styles';
// HELPERS
import { matchMedia, matchMediaMedium, matchMediaHorizontal } from 'helpers/matchMedia';
// ICONS
import hero from 'assets/images/heroImageModal.svg';
import heroHorizontal from 'assets/images/heroImageModalHorizontal.svg';
import heroMedium from 'assets/images/heroImageModalMedium.svg';

const Modal = ({ toggleModal, toggleModalHandler }) => {
  return (
    <ModalWrapper className={toggleModal && 'toggle'} onClick={() => toggleModalHandler()}>
      <HeroImage src={matchMediaHorizontal ? heroHorizontal : matchMediaMedium ? heroMedium : matchMedia && hero} />{' '}
      <LinksWrapper>
        <Link text='ABOUT ME'>
          <Button text='ABOUT ME' to='ABOUT ME' toggleModalHandler={toggleModalHandler} />
        </Link>
        <Link text='PROJECTS'>
          <Button text='PROJECTS' to='PROJECTS' toggleModalHandler={toggleModalHandler} />
        </Link>
        <Link text='CONTACT'>
          <Button text='CONTACT' to='CONTACT' toggleModalHandler={toggleModalHandler} />
        </Link>
      </LinksWrapper>
    </ModalWrapper>
  );
};

export default Modal;
