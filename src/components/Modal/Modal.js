import React from 'react';
// COMPONENTS
import LinkTo from 'components/LinkTo/LinkTo';
// STYLES
import { ModalWrapper, LinksWrapper, Link } from './Modal.styles';

const Modal = ({ toggleModal, toggleModalHandler }) => {
  return (
    <ModalWrapper className={toggleModal && 'toggle'} onClick={() => toggleModalHandler()}>
      <LinksWrapper>
        <Link text='ABOUT ME'>
          <LinkTo text='ABOUT ME' to='ABOUT ME' toggleModalHandler={toggleModalHandler} />
        </Link>
        <Link text='PROJECTS'>
          <LinkTo text='PROJECTS' to='PROJECTS' toggleModalHandler={toggleModalHandler} />
        </Link>
        <Link text='CONTACT'>
          <LinkTo text='CONTACT' to='CONTACT' toggleModalHandler={toggleModalHandler} />
        </Link>
      </LinksWrapper>
    </ModalWrapper>
  );
};

export default Modal;
