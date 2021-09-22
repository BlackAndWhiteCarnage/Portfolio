import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import { StyledDotBottom } from './PageTransition.styles';

const PageTransition = ({ toggleModal, toggleReadMore, viewProject }) => {
  return <StyledDotBottom className={`${toggleModal && 'toggle'} ${toggleReadMore && 'toggle'}  ${viewProject && 'toggle'}`} />;
};

PageTransition.propTypes = {
  toggleReadMore: PropTypes.bool.isRequired,
  toggleModal: PropTypes.bool.isRequired,
  viewProject: PropTypes.bool.isRequired,
};

export default PageTransition;
