import React from 'react';
import PropTypes from 'prop-types';
// ICONS
import arrowRightIcon from 'assets/icons/arrowRight-icon.svg';
import filePreviewIcon from 'assets/icons/filePreview-icon.svg';
// COMPONENTS
import SectionsWrapper from 'components/SectionsWrapper/SectionsWrapper';
import SectionsContentWrapper from 'components/SectionsContentWrapper/SectionsContentWrapper';
import MoreAboutMe from 'components/MoreAboutMe/MoreAboutMe';
import Button from 'components/Button/Button';
// ANIMATIONS
import { AboutMeContentWrapper, Header, Article, ButtonsWrapper } from './AboutMe.styles';
// DOCUMENTS
import myResume from 'documents/cv.pdf';
import SkillsSlider from 'components/SkillsSlider/SkillsSlider';

const AboutMe = ({ toggleReadMore, setToggleReadMore, isEnglish }) => {
  const toggleReadMoreHandler = () => {
    setToggleReadMore(true);
  };

  return (
    <>
      <SectionsWrapper id='ABOUT ME'>
        <SectionsContentWrapper toggle={toggleReadMore}>
          <AboutMeContentWrapper>
            <Header className='left'>{!isEnglish ? 'About Me' : 'O Mnie'}</Header>
            <Article>
              {!isEnglish
                ? 'Oh shit it works! When i’ve started to learn JavaScript, it was hard. I mean, my bad that i’ve rushed a little bit rusted eduweb course and I didnt take more from the lessons that my notes. After a while I have started to understand all the principles in that programming language. From day to day it was more fun to learn it! My wife started to hate me after thousend of messages showing her the code and say “Look, finnaly I’ve found a bug!”'
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus purus, rhoncus semper mollis non, rutrum sed metus. Nam euismod scelerisque odio, vitae molestie mauris consequat elementum. Pellentesque pulvinar a nisl at suscipit. Quisque eget semper felis. Ut id condimentum dui. Aenean nec risus et urna consectetur feugiat at pretium augue.'}
            </Article>
            <ButtonsWrapper>
              <Button onClick={toggleReadMoreHandler} text={!isEnglish ? 'READ MORE' : 'WIĘCEJ'} icon={arrowRightIcon} />
              <Button href={myResume} text={!isEnglish ? 'MY RESUME' : 'MOJE CV'} icon={filePreviewIcon} />
            </ButtonsWrapper>
          </AboutMeContentWrapper>
          <SkillsSlider isEnglish={isEnglish} />
        </SectionsContentWrapper>
      </SectionsWrapper>
      <MoreAboutMe toggleReadMore={toggleReadMore} toggleReadMoreHandler={toggleReadMoreHandler} isEnglish={isEnglish} />
    </>
  );
};

AboutMe.propTypes = {
  toggleReadMore: PropTypes.bool,
  setToggleReadMore: PropTypes.func,
};

export default AboutMe;
