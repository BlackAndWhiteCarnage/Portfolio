import React from 'react';
import PropTypes from 'prop-types';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { slide } from 'assets/animations/animation';
// STYLES
import { Wrapper } from './SectionsWrapper.styled';

const SectionsWrapper = ({ children, id }) => {
  const [element, controls] = useScroll();

  return (
    <Wrapper id={id} variants={slide} animate={controls} initial='hidden' ref={element}>
      {children}
    </Wrapper>
  );
};

SectionsWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
};

export default SectionsWrapper;
