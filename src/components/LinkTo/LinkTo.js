import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledLink = styled(Link)`
  position: absolute;
  white-space: nowrap;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const LinkTo = ({ text, to, toggleModalHandler }) => {
  return (
    <StyledLink to={to} smooth={true} duration={800} onClick={toggleModalHandler}>
      {text}
    </StyledLink>
  );
};

export default LinkTo;
