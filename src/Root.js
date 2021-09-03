import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
// VIEWS
import PreviewProject from 'components/PreviewProject/PreviewProject';

function Root() {
  const [toggleReadMore, setToggleReadMore] = useState(false);
  const [viewProject, setViewProject] = useState({ isToggled: false, data: false });
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation setToggleReadMore={setToggleReadMore} viewProject={viewProject} setViewProject={setViewProject} />
      {matchMedia && <Cursor />}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <Home />
            <AboutMe toggleReadMore={toggleReadMore} setToggleReadMore={setToggleReadMore} />
            <Projects viewProject={viewProject} setIsLoaded={setIsLoaded} />
            <Contact />
          </Route>
          <Route path='/projects/:id'>
            <PreviewProject isLoaded={isLoaded} setIsLoaded={setIsLoaded} viewProject={viewProject} />
          </Route>
        </Switch>
        <ShadowLayer className={`top ${viewProject.isToggled && 'hide'} ${toggleReadMore && 'hide'}`} />
        <ShadowLayer className={`bottom ${viewProject.isToggled && 'hide'} ${toggleReadMore && 'hide'}`} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default Root;
