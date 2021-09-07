import React from 'react';
import { ButtonWrapper } from './Button.styles';
import { slide } from 'assets/animations/animation';

const Button = ({ onClick, text, icon, href, className, margin }) => {
  return (
    <ButtonWrapper variants={slide} onClick={onClick} className={className} style={{ marginLeft: margin }} id='active'>
      <a href={href} target='_blank' id='active'>
        {text}
      </a>
      <img src={icon} id='active' />
    </ButtonWrapper>
  );
};

export default Button;
