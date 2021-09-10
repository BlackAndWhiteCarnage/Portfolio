import React from 'react';
// STYLES
import { Wrapper, SliderInfoWrapper, IsSliderLockedInfo } from './SliderInfo.styles';

const SliderInfo = ({ slide, isLocked }) => {
  return (
    <Wrapper>
      <SliderInfoWrapper variants={slide}>
        <strong>Click</strong> on projects to interact.
      </SliderInfoWrapper>
      <IsSliderLockedInfo variants={slide}>
        Slider <strong>{!isLocked ? 'unlocked' : 'locked'}</strong>
      </IsSliderLockedInfo>
    </Wrapper>
  );
};

export default SliderInfo;
