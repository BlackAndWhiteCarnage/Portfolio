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

function Root() {
  const [toggleReadMore, setToggleReadMore] = useState(false);
  const [viewProject, setViewProject] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = `${toggleReadMore || viewProject ? 'hidden' : 'scroll'}`;
  }, [toggleReadMore, viewProject]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {matchMedia && <Cursor />}
        <Navigation setToggleReadMore={setToggleReadMore} setViewProject={setViewProject} />
        <Home />
        <AboutMe toggleReadMore={toggleReadMore} setToggleReadMore={setToggleReadMore} />
        <Projects viewProject={viewProject} setViewProject={setViewProject} />
        <Contact />
        <ShadowLayer className={`top ${viewProject && 'hide'} ${toggleReadMore && 'hide'}`} />
        <ShadowLayer className={`bottom ${viewProject && 'hide'} ${toggleReadMore && 'hide'}`} />
      </ThemeProvider>
    </>
  );
}

export default Root;
