import React from 'react';
// ICONS
import facebook from 'assets/icons/facebook-icon.svg';
import github from 'assets/icons/github-icon.svg';
// STYLES
import { Wrapper, IconWrapper, Icon } from './SocialMedia.styled';

const SocialMedia = () => (
  <Wrapper>
    <IconWrapper id='active' href='https://www.facebook.com/krzysio.repsch/' target='_blank'>
      <Icon src={facebook} />
    </IconWrapper>
    <IconWrapper id='active' href='https://github.com/BlackAndWhiteCarnage' target='_blank'>
      <Icon src={github} />
    </IconWrapper>
  </Wrapper>
);

export default SocialMedia;
