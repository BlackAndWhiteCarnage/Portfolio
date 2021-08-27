import React from 'react';
// STYLES
import { ModalWrapper, LinksWrapper, Link } from './Modal.styles';

const Modal = ({ toggleModal }) => {
  return (
    <ModalWrapper className={toggleModal && 'toggle'}>
      <LinksWrapper>
        <Link id='active' text='O MNIE'>
          O MNIE
        </Link>
        <Link id='active' text='PROJEKTY'>
          PROJEKTY
        </Link>
        <Link id='active' text='PORTFOLIO'>
          PORTFOLIO
        </Link>
      </LinksWrapper>
    </ModalWrapper>
  );
};

export default Modal;
