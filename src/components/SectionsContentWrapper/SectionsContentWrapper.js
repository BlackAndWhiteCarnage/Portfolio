import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import { Wrapper } from './SectionsContentWrapper.styled';

const SectionsContentWrapper = ({ children, toggle }) => {
  return <Wrapper className={toggle && 'scaleDown'}>{children}</Wrapper>;
};

SectionsContentWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  toggle: PropTypes.bool,
};

export default SectionsContentWrapper;
