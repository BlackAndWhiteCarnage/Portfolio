import React from 'react';
// STYLES
import { SliderInfoWrapper, IsSliderLockedInfo } from './SliderInfo.styles';

const SliderInfo = ({ slide, isLocked }) => {
  return (
    <>
      <SliderInfoWrapper variants={slide}>
        <p>
          <strong>Click</strong> on projects to interact.
        </p>
      </SliderInfoWrapper>
      <IsSliderLockedInfo variants={slide}>
        <p>
          Slider <strong>{!isLocked ? 'unlocked' : 'locked'}</strong>
        </p>
      </IsSliderLockedInfo>
    </>
  );
};

export default SliderInfo;
