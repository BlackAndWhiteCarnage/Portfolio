import React from 'react';
// STYLES
import { StyledDotBottom } from './PageTransition.styles';

const PageTransition = ({ toggleModal, toggleReadMore, viewProject }) => {
  return <StyledDotBottom className={`${toggleModal && 'toggle'} ${toggleReadMore && 'toggle'}  ${viewProject && 'toggle'}`} />;
};

export default PageTransition;
