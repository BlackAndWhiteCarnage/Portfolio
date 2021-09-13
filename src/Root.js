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
import styled, { keyframes } from 'styled-components';
import hero from 'assets/images/heroImage.svg';
import heroMedium from 'assets/images/heroImageMedium.svg';
import heroHorizontal from 'assets/images/heroImageHorizontal.svg';
import { matchMedia, matchMediaMedium, matchMediaHorizontal } from 'helpers/matchMedia';

const rotate = keyframes`
50%{
  transform: scale(1.1);
}
`;

const HeroImage = styled.img`
  position: fixed;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.5;
  z-index: -1;
  animation: ${rotate} 10s infinite alternate;
`;

const ComicLayer = styled.img`
  position: fixed;
  z-index: -2;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.comicLayer.whiteColor};
  background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
`;

function Root() {
  const [toggleReadMore, setToggleReadMore] = useState(false);
  const [viewProject, setViewProject] = useState({ isToggled: false, data: false });

  useEffect(() => {
    document.body.style.overflowY = `${toggleReadMore || viewProject.isToggled ? 'hidden' : 'scroll'}`;
  }, [toggleReadMore, viewProject]);

  console.log(matchMediaHorizontal);
  console.log(matchMediaMedium);
  console.log(matchMedia);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Cursor />
        <Navigation toggleReadMore={toggleReadMore} setToggleReadMore={setToggleReadMore} viewProject={viewProject} setViewProject={setViewProject} />
        <HeroImage src={matchMediaHorizontal ? heroHorizontal : matchMediaMedium ? heroMedium : matchMedia && hero} />
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
