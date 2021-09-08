import React from 'react';
// COMPONENTS
import LinkTo from 'components/LinkTo/LinkTo';
// ICONS
import logoLeftPart from 'assets/icons/logoLeftPart-icon.svg';
import logoRightPart from 'assets/icons/logoRightPart-icon.svg';
import scroll from 'assets/icons/scroll-icon.svg';
import me from 'assets/images/myPhoto.png';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide, slideFromLeft } from 'assets/animations/animation';

import {
  Wrapper,
  LogoAndNavWrapper,
  LogoImageWrapper,
  LogoLeftHalf,
  LogoRightHalf,
  Navigation,
  NavItem,
  ScrollWrapper,
  Scroll,
  Line,
} from './Home.styles';

const Home = () => {
  const [element, controls] = useScroll();

  return (
    <Wrapper variants={fade} animate={controls} initial='hidden' ref={element}>
      <LogoAndNavWrapper variants={slide}>
        <LogoImageWrapper>
          <LogoLeftHalf src={me} />
        </LogoImageWrapper>
        <Navigation>
          <NavItem id='active' variants={slide} text='O MNIE'>
            <LinkTo text='ABOUT ME' to='ABOUT ME' />
          </NavItem>
          <NavItem id='active' variants={slide} text='PROJEKTY'>
            <LinkTo text='PROJECTS' to='PROJECTS' />
          </NavItem>
          <NavItem id='active' variants={slide} text='KONTAKT'>
            <LinkTo text='CONTACT' to='CONTACT' />
          </NavItem>
        </Navigation>
      </LogoAndNavWrapper>
      {/* <ScrollWrapper>
        <Scroll src={scroll} />
      </ScrollWrapper> */}
    </Wrapper>
  );
};

export default Home;
