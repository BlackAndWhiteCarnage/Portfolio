import React, { useState, useEffect } from 'react';
// VIEWS
import Home from 'views/Home/Home';
import AboutMe from 'views/AboutMe/AboutMe';
import Projects from 'views/Projects/Projects';
import Contact from 'views/Contact/Contact';
// COMPONENTS
import Navigation from 'components/Navigation/Navigation';
import Cursor from 'components/Cursor/Cursor';
import Modal from 'components/Modal/Modal';
import HeroImage from 'components/HeroImage/HeroImage';
import PageTransition from 'components/PageTransition/PageTransition';
import WelcomeScreen from 'components/WelcomeScreen/WelcomeScreen';
// STYLES
import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

function Root() {
  const [toggleReadMore, setToggleReadMore] = useState(false);
  const [viewProject, setViewProject] = useState({ isToggled: false, data: false });
  const [emailSend, setEmailSend] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [welcomeScreen, setWelcomeScreen] = useState({ wrapper: true, image: false });

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
    if (toggleModal || viewProject.isToggled || toggleReadMore) {
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WelcomeScreen welcomeScreen={welcomeScreen} />
      <HeroImage />
      <PageTransition toggleReadMore={toggleReadMore} viewProject={viewProject.isToggled} toggleModal={toggleModal} />
      <Cursor emailSend={emailSend} />
      <Navigation
        toggleModal={toggleModal}
        toggleModalHandler={toggleModalHandler}
        toggleReadMore={toggleReadMore}
        setToggleReadMore={setToggleReadMore}
        viewProject={viewProject}
        setViewProject={setViewProject}
      />
      <Modal toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} />
      {/* VIEWS */}
      <Home />
      <AboutMe toggleReadMore={toggleReadMore} setToggleReadMore={setToggleReadMore} />
      <Projects viewProject={viewProject} setViewProject={setViewProject} />
      <Contact emailSend={emailSend} setEmailSend={setEmailSend} />
    </ThemeProvider>
  );
}

export default Root;
