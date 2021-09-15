import React from 'react';
import { ButtonWrapper, StyledLink } from './Button.styles';

const Button = ({ onClick, text, icon, href, className, margin, to, toggleModalHandler }) => {
  return (
    <ButtonWrapper onClick={onClick} className={className} style={{ marginLeft: margin }} id='active'>
      {!to ? (
        <>
          <a href={href} target='_blank' id='active'>
            {text}
          </a>
          <img src={icon} id='active' />
        </>
      ) : (
        <StyledLink to={to} onClick={toggleModalHandler} smooth={true} duration={500} id='active'>
          {text}
        </StyledLink>
      )}
    </ButtonWrapper>
  );
};

export default Button;
