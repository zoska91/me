import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';
import Timeline from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';

import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <Timeline />
    <Footer />
  </ThemeProvider>
);

export default App;
