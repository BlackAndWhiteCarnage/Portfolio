import React, { useState, useEffect } from 'react';
import arrowRight from 'assets/icons/arrowRight-icon.svg';
import filePreview from 'assets/icons/filePreview-icon.svg';
// COMPONENTS
import SectionHeader from 'components/SectionHeader/SectionHeader';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide, headerAnimation } from 'assets/animations/animation';
import { Wrapper, AboutMeWrapper, Header, Article, ButtonsWrapper, Button, ReadMoreWrapper, ReadMore, Slider, White, Black } from './AboutMe.styles';
// RESUME
import cv from 'documents/cv.pdf';

const AboutMe = ({ toggleReadMore, setToggleReadMore }) => {
  const [element, controls] = useScroll();

  const toggleReadMoreHandler = () => {
    setToggleReadMore(!toggleReadMore);
  };

  useEffect(() => {
    document.body.style.overflowY = `${toggleReadMore ? 'hidden' : 'scroll'}`;
  }, [toggleReadMore]);

  return (
    <>
      <Wrapper variants={fade} animate={controls} initial='hidden' ref={element} id='ABOUT ME'>
        {/* <SectionHeader text='ABOUT ME' /> */}
        <AboutMeWrapper variants={slide}>
          <Article variants={slide}>
            Oh shit it works! When i’ve started to learn JavaScript, it was hard. I mean, my bad that i’ve rushed a little bit rusted eduweb course
            and I didnt take more from the lessons that my notes. After a while I have started to understand all the principles in that programming
            language. From day to day it was more fun to learn it! My wife started to hate me after thousend of messages showing her the code and say
            “Look, finnaly I’ve found a bug!” Oh shit it works! When i’ve started to learn JavaScript, it was hard. I mean, my bad that i’ve rushed a
            little bit rusted eduweb course and I didnt take more from the lessons that my notes. After a while I have started to understand all the
            principles in that programming language. From day to day it was more fun to learn it! My wife started to hate me after thousend of
            messages showing her the code and say “Look, finnaly I’ve found a bug!”
          </Article>
          <ButtonsWrapper>
            <Button variants={slide} onClick={toggleReadMoreHandler}>
              <a>READ MORE</a>
              <img src={arrowRight} />
            </Button>
            <Button variants={slide}>
              <a href={cv} target='_blank'>
                MY RESUME
              </a>
              <img src={filePreview} />
            </Button>
          </ButtonsWrapper>
        </AboutMeWrapper>
      </Wrapper>
      <ReadMoreWrapper className={toggleReadMore && 'show'} onClick={toggleReadMoreHandler}>
        <ReadMore>adsads</ReadMore>
      </ReadMoreWrapper>
      <Slider className={toggleReadMore && 'show'}>
        <White className={toggleReadMore && 'show'} />
        <Black className={toggleReadMore && 'show'} />
      </Slider>
    </>
  );
};

export default AboutMe;
