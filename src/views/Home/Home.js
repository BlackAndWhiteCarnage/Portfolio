import React from 'react';
// ICONS
import logoLeftPart from 'assets/icons/logoLeftPart-icon.svg';
import logoRightPart from 'assets/icons/logoRightPart-icon.svg';
import scroll from 'assets/icons/scroll-icon.svg';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide, slideFromLeft } from 'assets/animations/animation';

import { Wrapper, LogoAndNavWrapper, LogoImageWrapper, LogoLeftHalf, LogoRightHalf, Navigation, NavItem, Scroll, Line } from './Home.styles';

const Home = () => {
  const [element, controls] = useScroll();

  return (
    <Wrapper variants={fade} animate={controls} initial='hidden' ref={element}>
      <LogoAndNavWrapper variants={slide}>
        <LogoImageWrapper>
          <LogoLeftHalf src={logoLeftPart} />
          <LogoRightHalf src={logoRightPart} variants={slideFromLeft} />
        </LogoImageWrapper>
        <Navigation>
          <NavItem id='active' variants={slide} text='O MNIE'>
            O MNIE
          </NavItem>
          <Line variants={fade} />
          <NavItem id='active' variants={slide} text='PROJEKTY'>
            PROJEKTY
          </NavItem>
          <Line variants={fade} />
          <NavItem id='active' variants={slide} text='KONTAKT'>
            KONTAKT
          </NavItem>
        </Navigation>
      </LogoAndNavWrapper>
      <Scroll src={scroll} />
    </Wrapper>
  );
};

export default Home;
