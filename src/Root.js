import React, { useState } from 'react';
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {matchMedia && <Cursor />}
        <Navigation setToggleReadMore={setToggleReadMore} />
        <Home />
        <AboutMe toggleReadMore={toggleReadMore} setToggleReadMore={setToggleReadMore} />
        <Projects />
        <Contact />
        <ShadowLayer className='top' />
        <ShadowLayer className='bottom' />
      </ThemeProvider>
    </>
  );
}

export default Root;
