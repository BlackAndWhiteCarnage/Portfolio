import React from 'react';
// COMPONENTS
import Button from 'components/Button/Button';
// ICONS
import arrow from 'assets/icons/arrowDown-icon.svg';
import me from 'assets/images/myPhoto.png';
import { PosterImageWrapper, PosterImage, Navigation, ScrollWrapper, Scroll } from './Home.styles';
import SectionsWrapper from 'components/SectionsWrapper/SectionsWrapper';
import SectionsContentWrapper from 'components/SectionsContentWrapper/SectionsContentWrapper';

const Home = () => {
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
          <Button text='ABOUT ME' to='ABOUT ME' className='right' />
          <Button text='PROJECTS' to='PROJECTS' className='right' />
          <Button text='CONTACT' to='CONTACT' className='right' />
        </Navigation>
      </SectionsContentWrapper>
    </SectionsWrapper>
  );
};

export default Home;
