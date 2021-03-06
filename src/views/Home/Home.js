import React from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import SectionsWrapper from 'components/SectionsWrapper/SectionsWrapper';
import SectionsContentWrapper from 'components/SectionsContentWrapper/SectionsContentWrapper';
import Button from 'components/Button/Button';
// ICONS
import arrowIcon from 'assets/icons/arrowDown-icon.svg';
// IMAGES
import myPhoto from 'assets/images/myPhoto.jpg';
import myPhotoPL from 'assets/images/myPhotoPL.jpg';
// STYLES
import { PosterImageWrapper, PosterImage, Navigation, ScrollWrapper, Scroll } from './Home.styles';

const Home = ({ isEnglish }) => (
  <SectionsWrapper>
    <SectionsContentWrapper>
      <PosterImageWrapper>
        <PosterImage src={!isEnglish ? myPhoto : myPhotoPL} />
        <ScrollWrapper>
          <Scroll src={arrowIcon} />
        </ScrollWrapper>
      </PosterImageWrapper>
      <Navigation>
        <Button text={!isEnglish ? 'ABOUT ME' : 'O MNIE'} to='ABOUT ME' className='right' />
        <Button text={!isEnglish ? 'PROJECTS' : 'PROJEKTY'} to='PROJECTS' className='right' />
        <Button text={!isEnglish ? 'CONTACT' : 'KONTAKT'} to='CONTACT' className='right' />
      </Navigation>
    </SectionsContentWrapper>
  </SectionsWrapper>
);

Home.propTypes = {
  isEnglish: PropTypes.bool.isRequired,
};

export default Home;
