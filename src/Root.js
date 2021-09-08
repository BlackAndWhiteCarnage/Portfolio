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
import ShadowLayer from 'components/ShadowLayer/ShadowLayer';
// HELPERS
import { matchMedia } from 'helpers/matchMedia';
import styled from 'styled-components';

const HeroImage = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%23D6D6D6' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
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
        {matchMedia && <Cursor />}
        <Navigation toggleReadMore={toggleReadMore} setToggleReadMore={setToggleReadMore} viewProject={viewProject} setViewProject={setViewProject} />
        <HeroImage />
        <Home />
        <AboutMe toggleReadMore={toggleReadMore} setToggleReadMore={setToggleReadMore} />
        {/* <Projects viewProject={viewProject} setViewProject={setViewProject} /> */}
        <Contact />
        {/* <ShadowLayer className={`top ${viewProject.isToggled && 'hide'} ${toggleReadMore && 'hide'}`} />
        <ShadowLayer className={`bottom ${viewProject.isToggled && 'hide'} ${toggleReadMore && 'hide'}`} /> */}
      </ThemeProvider>
    </>
  );
}

export default Root;
