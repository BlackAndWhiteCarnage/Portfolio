import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Home from 'views/Home/Home';
import Navigation from 'components/Navigation/Navigation';
import Cursor from 'components/Cursor/Cursor';

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Cursor />
        <Navigation />
        <Home />
        <Home />
        <Home />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default Root;
