import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1300px;
  height: 600px;
  transition: 0.5s 0.5s ease;
  &.scaleDown {
    transition: 0.5s ease;
    opacity: 0;
    transform: scale(0);
  }
  @media screen and (max-width: 1920px) {
    width: 1000px;
    height: 450px;
  }
  @media screen and (max-width: 1366px) {
    width: 800px;
    height: 350px;
  }
  @media screen and (max-width: 760px) {
    flex-direction: column;
    width: 90%;
    height: 1100px;
    padding: 50px 10px;
  }
  @media screen and (max-width: 520px) {
    width: 100%;
    min-height: 1000px;
    height: 100%;
  }
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SectionsContentWrapper = ({ children, toggle }) => {
  return <Wrapper className={toggle && 'scaleDown'}>{children}</Wrapper>;
};

export default SectionsContentWrapper;
