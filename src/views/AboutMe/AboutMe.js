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

const AboutMe = ({ toggleReadMore, setToggleReadMore }) => {
  const toggleReadMoreHandler = () => {
    setToggleReadMore(true);
  };

  return (
    <>
      <SectionsWrapper id='ABOUT ME'>
        <SectionsContentWrapper toggle={toggleReadMore}>
          <AboutMeContentWrapper>
            <Header className='left'>About Me</Header>
            <Article>
              Oh shit it works! When i’ve started to learn JavaScript, it was hard. I mean, my bad that i’ve rushed a little bit rusted eduweb course
              and I didnt take more from the lessons that my notes. After a while I have started to understand all the principles in that programming
              language. From day to day it was more fun to learn it! My wife started to hate me after thousend of messages showing her the code and
              say “Look, finnaly I’ve found a bug!”
            </Article>
            <ButtonsWrapper>
              <Button onClick={toggleReadMoreHandler} text='READ MORE' icon={arrowRightIcon} />
              <Button href={myResume} text='MY RESUME' icon={filePreviewIcon} />
            </ButtonsWrapper>
          </AboutMeContentWrapper>
          <SkillsSlider />
        </SectionsContentWrapper>
      </SectionsWrapper>
      <MoreAboutMe toggleReadMore={toggleReadMore} toggleReadMoreHandler={toggleReadMoreHandler} />
    </>
  );
};

AboutMe.propTypes = {
  toggleReadMore: PropTypes.bool,
  setToggleReadMore: PropTypes.func,
};

export default AboutMe;
