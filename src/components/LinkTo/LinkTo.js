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
  font-size: ${({ theme }) => theme.fontSize.xl};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  transition: 0.5s ease;
  background-color: #ffc10b;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%23FFAD00' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  &:hover {
    transition: 0.5s ease;
    background-color: #a3ed0a;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%2343B104' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }
`;

const LinkTo = ({ text, to, toggleModalHandler }) => {
  return (
    <StyledLink to={to} smooth={true} duration={800} onClick={toggleModalHandler} id='active'>
      {text}
    </StyledLink>
  );
};

export default LinkTo;
