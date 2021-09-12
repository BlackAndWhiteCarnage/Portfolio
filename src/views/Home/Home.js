import React from 'react';
// COMPONENTS
import Button from 'components/Button/Button';
// ICONS
import arrow from 'assets/icons/arrowDown-icon.svg';
import me from 'assets/images/myPhoto.png';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide, slideFromLeft } from 'assets/animations/animation';

import { PosterImageWrapper, PosterImage, Navigation, ScrollWrapper, Scroll } from './Home.styles';
import SectionsWrapper from 'components/SectionsWrapper/SectionsWrapper';
import SectionsContentWrapper from 'components/SectionsContentWrapper/SectionsContentWrapper';

const Home = () => {
  const [element, controls] = useScroll();

  return (
    <SectionsWrapper>
      <SectionsContentWrapper>
        <PosterImageWrapper>
          <PosterImage src={me} />
          <ScrollWrapper>
            <Scroll src={arrow} />
          </ScrollWrapper>
        </PosterImageWrapper>
        <Navigation>
          <Button text='ABOUT ME' to='ABOUT ME' />
          <Button text='PROJECTS' to='PROJECTS' />
          <Button text='CONTACT' to='CONTACT' />
        </Navigation>
      </SectionsContentWrapper>
    </SectionsWrapper>
  );
};

export default Home;
