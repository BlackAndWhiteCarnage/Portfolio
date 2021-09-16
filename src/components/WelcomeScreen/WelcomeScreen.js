import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Image } from './WelcomeScreen.styles';
import welcomeIcon from 'assets/icons/welcomeScreen-icon.svg';

const WelcomeScreen = ({ welcomeScreen }) => {
  return (
    <Wrapper className={!welcomeScreen.wrapper && 'hide'}>
      <Image src={welcomeIcon} className={welcomeScreen.image && 'show'} />
    </Wrapper>
  );
};

WelcomeScreen.propTypes = {};

export default WelcomeScreen;
