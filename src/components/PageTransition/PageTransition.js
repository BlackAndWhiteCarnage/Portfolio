import React from 'react';
// STYLES
import { StyledDotTop, StyledDotBottom } from './PageTransition.styles';

const PageTransition = ({ toggleModal, toggleReadMore, viewProject }) => {
  return (
    <>
      <StyledDotTop className={`${toggleModal && 'toggle'} ${toggleReadMore && 'toggle'}  ${viewProject && 'toggle'}`} />
      <StyledDotBottom className={`${toggleModal && 'toggle'} ${toggleReadMore && 'toggle'}  ${viewProject && 'toggle'}`} />
    </>
  );
};

export default PageTransition;
