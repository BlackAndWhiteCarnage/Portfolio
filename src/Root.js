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
  const [viewProject, setViewProject] = useState(false);
  const [emailSend, setEmailSend] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
    if (toggleModal || viewProject || toggleReadMore) {
      closeOtherModalsHandler();
    }
  };

  const closeOtherModalsHandler = () => {
    setToggleReadMore(false);
    setViewProject(false);
    setToggleModal(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WelcomeScreen />
      <HeroImage />
      <PageTransition toggleReadMore={toggleReadMore} viewProject={viewProject} toggleModal={toggleModal} />
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
