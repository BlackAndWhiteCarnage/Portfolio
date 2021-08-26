import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Home from 'views/Home/Home';
import Navigation from 'components/Navigation/Navigation';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Home />
    </ThemeProvider>
  );
}

export default Root;
