import React from 'react';
// ICONS
import arrowRight from 'assets/icons/arrowRight-icon.svg';
import filePreview from 'assets/icons/filePreview-icon.svg';
// COMPONENTS
import PageTransition from 'components/PageTransition/PageTransition';
import Button from 'components/Button/Button';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide } from 'assets/animations/animation';
import { AboutMeWrapperPartOne, MySkillsWrapper, Header, Article, ButtonsWrapper, MySkills, Skill } from './AboutMe.styles';
// RESUME
import cv from 'documents/cv.pdf';
import MoreAboutMe from 'components/MoreAboutMe/MoreAboutMe';
import SectionsWrapper from 'components/SectionsWrapper/SectionsWrapper';
import SectionsContentWrapper from 'components/SectionsContentWrapper/SectionsContentWrapper';

const AboutMe = ({ toggleReadMore, setToggleReadMore }) => {
  const [element, controls] = useScroll();

  const toggleReadMoreHandler = () => {
    setToggleReadMore(!toggleReadMore);
  };

  return (
    <>
      {/* <Wrapper variants={fade} animate={controls} initial='hidden' ref={element} id='ABOUT ME'> */}
      <SectionsWrapper id='ABOUT ME'>
        <SectionsContentWrapper>
          <AboutMeWrapperPartOne variants={slide}>
            <Header className='left'>About Me</Header>
            <Article variants={slide}>
              Oh shit it works! When i’ve started to learn JavaScript, it was hard. I mean, my bad that i’ve rushed a little bit rusted eduweb course
              and I didnt take more from the lessons that my notes. After a while I have started to understand all the principles in that programming
              language. From day to day it was more fun to learn it! My wife started to hate me after thousend of messages showing her the code and
              say “Look, finnaly I’ve found a bug!”
            </Article>
            <ButtonsWrapper>
              <Button onClick={toggleReadMoreHandler} text='READ MORE' icon={arrowRight} className='AboutMe' />
              <Button href={cv} text='MY RESUME' icon={filePreview} className='AboutMe' />
            </ButtonsWrapper>
          </AboutMeWrapperPartOne>
          <MySkillsWrapper>
            <Header>My Current Skills</Header>
            <MySkills variants={slide} className={toggleReadMore && 'hide'}>
              <Skill>HTML</Skill>
              <Skill>CSS</Skill>
              <Skill>Java Script</Skill>
              <Skill>SCSS</Skill>
              <Skill>REACT</Skill>
              <Skill>STYLED COMPONENTS</Skill>
              <Skill>FRAMER MOTION</Skill>
              <Skill>GITHUB</Skill>
              <Skill>FIGMA</Skill>
            </MySkills>
          </MySkillsWrapper>
        </SectionsContentWrapper>
      </SectionsWrapper>
      {/* </Wrapper> */}
      <MoreAboutMe toggleReadMore={toggleReadMore} toggleReadMoreHandler={toggleReadMoreHandler} />
      <PageTransition toggle={toggleReadMore} />
    </>
  );
};

export default AboutMe;
