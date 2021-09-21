import React, { useState, useEffect } from 'react';
// ICONS
import welcomeIcon from 'assets/icons/welcomeScreen-icon.png';
// STYLES
import { Wrapper, Image } from './WelcomeScreen.styles';

const WelcomeScreen = () => {
  const [welcomeScreen, setWelcomeScreen] = useState({ wrapper: true, image: false });

  useEffect(() => {
    setWelcomeScreen({ wrapper: true, image: true });
    setTimeout(() => {
      setWelcomeScreen({ wrapper: false, image: true });
    }, 2000);
  }, []);

  return (
    <Wrapper className={!welcomeScreen.wrapper && 'hide'}>
      <Image src={welcomeIcon} className={welcomeScreen.image && 'show'} />
    </Wrapper>
  );
};

export default WelcomeScreen;
