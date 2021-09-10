import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1300px;
  height: 600px;
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
`;

const SectionsContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default SectionsContentWrapper;