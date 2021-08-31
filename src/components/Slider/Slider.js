import React from 'react';
// STYLES
import { StyledDotTop, StyledDotBottom } from './Slider.styles';

const Slider = ({ toggle }) => {
  return (
    <>
      <StyledDotTop className={toggle && 'toggle'} />
      <StyledDotBottom className={toggle && 'toggle'} />
    </>
  );
};

export default Slider;
