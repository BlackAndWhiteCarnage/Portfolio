// STYLES
import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
// VIEWS
import Home from 'views/Home/Home';
import AboutMe from 'views/AboutMe/AboutMe';
import Projects from 'views/Projects/Projects';
// COMPONENTS
import Navigation from 'components/Navigation/Navigation';
import Cursor from 'components/Cursor/Cursor';
import ShadowLayer from 'components/ShadowLayer/ShadowLayer';
// HELPERS
import { matchMedia } from 'helpers/matchMedia';

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {matchMedia && <Cursor />}
        <Navigation />
        <Home />
        <AboutMe />
        <Projects />
        <ShadowLayer className='top' />
        <ShadowLayer className='bottom' />
      </ThemeProvider>
    </>
  );
}

export default Root;
