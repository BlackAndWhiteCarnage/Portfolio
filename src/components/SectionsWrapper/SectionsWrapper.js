import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 110vh;
  height: auto;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
    min-height: 800px;
    padding: 0;
  }
`;

const SectionsWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default SectionsWrapper;
