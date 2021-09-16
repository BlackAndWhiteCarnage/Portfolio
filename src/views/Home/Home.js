import React from 'react';
// COMPONENTS
import SectionsWrapper from 'components/SectionsWrapper/SectionsWrapper';
import SectionsContentWrapper from 'components/SectionsContentWrapper/SectionsContentWrapper';
import Button from 'components/Button/Button';
// ICONS
import arrowIcon from 'assets/icons/arrowDown-icon.svg';
// IMAGES
import myPhoto from 'assets/images/myPhoto.png';
// STYLES
import { PosterImageWrapper, PosterImage, Navigation, ScrollWrapper, Scroll } from './Home.styles';

const Home = () => (
  <SectionsWrapper>
    <SectionsContentWrapper>
      <PosterImageWrapper>
        <PosterImage src={myPhoto} />
        <ScrollWrapper>
          <Scroll src={arrowIcon} />
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

export default Home;
