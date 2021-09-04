import React from 'react';
import { ButtonWrapper } from './Button.styles';
import { slide } from 'assets/animations/animation';
import { Link } from 'react-router-dom';

const Button = ({ onClick, text, icon, href, className, margin }) => {
  return (
    <ButtonWrapper variants={slide} onClick={onClick} className={className} style={{ marginLeft: margin }}>
      <a href={href} target='_blank'>
        {text}
      </a>
      <img src={icon} />
    </ButtonWrapper>
  );
};

export default Button;
