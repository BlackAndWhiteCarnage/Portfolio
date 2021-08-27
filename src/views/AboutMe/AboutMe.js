import React from 'react';
import arrowRight from 'assets/icons/arrowRight-icon.svg';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide, headerAnimation } from 'assets/animations/animation';
import { Wrapper, AboutMeWrapper, Header, Article, Button } from './AboutMe.styles';

const AboutMe = () => {
  const [element, controls] = useScroll();

  return (
    <Wrapper variants={fade} animate={controls} initial='hidden' ref={element}>
      <AboutMeWrapper variants={slide}>
        <Header variants={headerAnimation}>ABOUT ME</Header>
        <Article variants={slide}>
          Oh shit it works! When i’ve started to learn JavaScript, it was hard. I mean, my bad that i’ve rushed a little bit rusted eduweb course and
          I didnt take more from the lessons that my notes. After a while I have started to understand all the principles in that programming
          language. From day to day it was more fun to learn it! My wife started to hate me after thousend of messages showing her the code and say
          “Look, finnaly I’ve found a bug!” Oh shit it works! When i’ve started to learn JavaScript, it was hard. I mean, my bad that i’ve rushed a
          little bit rusted eduweb course and I didnt take more from the lessons that my notes. After a while I have started to understand all the
          principles in that programming language. From day to day it was more fun to learn it! My wife started to hate me after thousend of messages
          showing her the code and say “Look, finnaly I’ve found a bug!”
        </Article>
        <Button variants={slide}>
          <p>KEEP READING</p>
          <img src={arrowRight} />
        </Button>
      </AboutMeWrapper>
    </Wrapper>
  );
};

export default AboutMe;
