import React from 'react';
// ICONS
import facebookIcon from 'assets/icons/facebook-icon.svg';
import githubIcon from 'assets/icons/github-icon.svg';
import polishFlagIcon from 'assets/icons/polishFlag-icon.svg';
import englishFlagIcon from 'assets/icons/englishFlag-icon.svg';
// STYLES
import { Wrapper, IconWrapper, Icon } from './SocialMedia.styled';

const SocialMedia = ({ setIsEnglish, isEnglish }) => {
  const changeLanguageHandler = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <Wrapper>
      <IconWrapper id='active' href='https://www.facebook.com/krzysio.repsch/' target='_blank'>
        <Icon src={facebookIcon} />
      </IconWrapper>
      <IconWrapper id='active' href='https://github.com/BlackAndWhiteCarnage' target='_blank'>
        <Icon src={githubIcon} />
      </IconWrapper>
      <IconWrapper id='active' onClick={changeLanguageHandler}>
        <Icon src={isEnglish ? englishFlagIcon : polishFlagIcon} className='flag' />
      </IconWrapper>
    </Wrapper>
  );
};

export default SocialMedia;
