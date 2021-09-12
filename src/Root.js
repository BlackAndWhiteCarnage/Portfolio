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
// HELPERS
import styled from 'styled-components';
import hero from 'assets/images/heroImage.svg';

const HeroImage = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: -1;
`;

const ComicLayer = styled.img`
  position: fixed;
  z-index: -2;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.comicLayer.whiteColor};
  background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
`;

function Root() {
  const [toggleReadMore, setToggleReadMore] = useState(false);
  const [viewProject, setViewProject] = useState({ isToggled: false, data: false });

  useEffect(() => {
    document.body.style.overflowY = `${toggleReadMore || viewProject.isToggled ? 'hidden' : 'scroll'}`;
  }, [toggleReadMore, viewProject]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Cursor />
        <Navigation toggleReadMore={toggleReadMore} setToggleReadMore={setToggleReadMore} viewProject={viewProject} setViewProject={setViewProject} />
        <HeroImage src={hero} />
        <ComicLayer />
        <HeroImage />
        <Home />
        <AboutMe toggleReadMore={toggleReadMore} setToggleReadMore={setToggleReadMore} />
        <Projects viewProject={viewProject} setViewProject={setViewProject} />
        <Contact />
      </ThemeProvider>
    </>
  );
}

export default Root;
