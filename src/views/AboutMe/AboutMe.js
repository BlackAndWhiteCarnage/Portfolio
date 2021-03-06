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
                : 'O cholera to działa! Kiedy zaczynałem uczyć się JavaScript było ciężko i mam tu na myśli to że za bardzo pośpieszyłem się z trochę przestażałym kursem na eduweb więc z lekcji nie wynosiłem nic więcej niż moje notatki. Po jakimś czasie zacząłem rozumieć wszystkie zasady programowania i z dnia na dzień było co raz przyjemniej się go uczyć! Żona z resztą zaczęła mnie nienawidzić po tysiąchach wiadomości gdzie pokazwyałem jej kawałek kodu i pisałem "Patrz, znalazłem w końcu buga!'}
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
  isEnglish: PropTypes.bool.isRequired,
};

export default AboutMe;
