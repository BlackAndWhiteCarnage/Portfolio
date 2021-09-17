import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import { ButtonWrapper, StyledLink } from './Button.styles';

const Button = ({ onClick, text, icon, href, className, to, toggleModalHandler }) => {
  return (
    <ButtonWrapper onClick={onClick} className={className} id='active'>
      {!to ? (
        <>
          <a href={href} target='_blank' id='active'>
            {text}
          </a>
          <img src={icon} id='active' />
        </>
      ) : (
        <StyledLink to={to} onClick={toggleModalHandler} smooth={true} duration={500} ignoreCancelEvents={true} id='active'>
          {text}
        </StyledLink>
      )}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  toggleModalHandler: PropTypes.func,
};

export default Button;
