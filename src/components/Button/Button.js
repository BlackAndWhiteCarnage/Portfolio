import React from 'react';
import { ButtonWrapper, StyledLink } from './Button.styles';
import { slide } from 'assets/animations/animation';

const Button = ({ onClick, text, icon, href, className, margin, to, toggleModalHandler }) => {
  return (
    <ButtonWrapper variants={slide} onClick={onClick} className={className} style={{ marginLeft: margin }} id='active'>
      {!to ? (
        <>
          <a href={href} target='_blank' id='active'>
            {text}
          </a>
          <img src={icon} id='active' />
        </>
      ) : (
        <StyledLink to={to} onClick={toggleModalHandler} smooth={true} duration={800} id='active'>
          {text}
        </StyledLink>
      )}
    </ButtonWrapper>
  );
};

export default Button;
