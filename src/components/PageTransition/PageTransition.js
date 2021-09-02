import React from 'react';
// STYLES
import { StyledDotTop, StyledDotBottom } from './PageTransition.styles';

const PageTransition = ({ toggle }) => {
  return (
    <>
      <StyledDotTop className={toggle && 'toggle'} />
      <StyledDotBottom className={toggle && 'toggle'} />
    </>
  );
};

export default PageTransition;
