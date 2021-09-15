import React, { useState, useEffect } from 'react';
// STYLES
import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
// VIEWS
import Home from 'views/Home/Home';
import AboutMe from 'views/AboutMe/AboutMe';
import Projects from 'views/Projects/Projects';
import Contact from 'views/Contact/Contact';
// COMPONENTS
import Navigation from 'components/Navigation/Navigation';
import Cursor from 'components/Cursor/Cursor';
import Modal from 'components/Modal/Modal';
// HELPERS
import styled, { keyframes } from 'styled-components';
import hero from 'assets/images/heroImage.svg';
import heroMedium from 'assets/images/heroImageMedium.svg';
import heroHorizontal from 'assets/images/heroImageHorizontal.svg';
import { matchMedia, matchMediaMedium, matchMediaHorizontal } from 'helpers/matchMedia';
import PageTransition from 'components/PageTransition/PageTransition';
import welcome from 'assets/icons/welcomeScreen-icon.svg';

const rotate = keyframes`
0%{
  transform: scale(1.1);
}
25%{
  transform: rotate(5deg) scale(1.2);
}
50%{
  transform: scale(1.1);
}
75%{
  transform: rotate(-5deg) scale(1.2);
}
100%{
  transform: scale(1.1);
}
`;

const HeroImage = styled.img`
  position: fixed;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.15;
  z-index: -1;
  animation: ${rotate} 15s infinite alternate;
`;

const ComicLayer = styled.img`
  position: fixed;
  z-index: -2;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.comicLayer.whiteColor};
  background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
`;

const WelcomeScreen = styled.div`
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.comicLayer.redColor};
  background-image: ${({ theme }) => theme.comicLayer.redBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  &.hide {
    top: -150%;
    transition: 1s ease;
  }
`;

const WelcomeImage = styled.img`
  width: 80%;
  height: 80%;
  transform: scale(0) rotate(360deg);
  opacity: 0;
  &.show {
    transition: 0.5s ease-out;
    opacity: 1;
    transform: scale(1);
  }
`;

function Root() {
  const [toggleReadMore, setToggleReadMore] = useState(false);
  const [viewProject, setViewProject] = useState({ isToggled: false, data: false });
  const [emailSend, setEmailSend] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [welcomeScreen, setWelcomeScreen] = useState({ wrapper: true, image: false });

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
    if (toggleModal) {
      closeOtherModalsHandler();
    }
  };

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    setWelcomeScreen({ wrapper: true, image: true });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setWelcomeScreen({ wrapper: false, image: true });
      }, 1000);
    }, 1000);
  }, []);

  const closeOtherModalsHandler = () => {
    setToggleReadMore(false);
    setViewProject({ ...viewProject, isToggled: false });
    setToggleModal(false);
  };

  useEffect(() => {
    document.body.style.overflowY = `${toggleReadMore || viewProject.isToggled || toggleModal ? 'hidden' : 'scroll'}`;
  }, [toggleReadMore, viewProject, toggleModal]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Cursor emailSend={emailSend} />
        <Modal toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} closeOtherModalsHandler={closeOtherModalsHandler} />
        <WelcomeScreen className={!welcomeScreen.wrapper && 'hide'}>
          <WelcomeImage src={welcome} className={welcomeScreen.image && 'show'} />
        </WelcomeScreen>
        <Navigation
          toggleModal={toggleModal}
          toggleModalHandler={toggleModalHandler}
          toggleReadMore={toggleReadMore}
          setToggleReadMore={setToggleReadMore}
          viewProject={viewProject}
          setViewProject={setViewProject}
          closeOtherModalsHandler={closeOtherModalsHandler}
        />
        <HeroImage src={matchMediaHorizontal ? heroHorizontal : matchMediaMedium ? heroMedium : matchMedia && hero} />
        <ComicLayer />
        <HeroImage />
        <Home welcomeScreen={welcomeScreen.wrapper} />
        <AboutMe toggleReadMore={toggleReadMore} setToggleReadMore={setToggleReadMore} />
        <Projects viewProject={viewProject} setViewProject={setViewProject} />
        <Contact emailSend={emailSend} setEmailSend={setEmailSend} />
        <PageTransition toggleReadMore={toggleReadMore} viewProject={viewProject.isToggled} toggleModal={toggleModal} />
      </ThemeProvider>
    </>
  );
}

export default Root;
