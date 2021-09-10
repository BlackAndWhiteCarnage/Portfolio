import React from 'react';
// COMPONENTS
import LinkTo from 'components/LinkTo/LinkTo';
// ICONS
import arrow from 'assets/icons/arrowDown-icon.svg';
import me from 'assets/images/myPhoto.png';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide, slideFromLeft } from 'assets/animations/animation';

import { Wrapper, PosterImageWrapper, PosterImage, Navigation, NavItem, ScrollWrapper, Scroll } from './Home.styles';
import SectionsWrapper from 'components/SectionsWrapper/SectionsWrapper';
import SectionsContentWrapper from 'components/SectionsContentWrapper/SectionsContentWrapper';

const Home = () => {
  const [element, controls] = useScroll();

  return (
    <Wrapper variants={fade} animate={controls} initial='hidden' ref={element}>
      {/* <LogoAndNavWrapper variants={slide}> */}
      <SectionsWrapper>
        <SectionsContentWrapper>
          <PosterImageWrapper>
            <PosterImage src={me} />
            <ScrollWrapper>
              <Scroll src={arrow} />
            </ScrollWrapper>
          </PosterImageWrapper>
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
        </SectionsContentWrapper>
      </SectionsWrapper>
      {/* </LogoAndNavWrapper> */}
    </Wrapper>
  );
};

export default Home;
