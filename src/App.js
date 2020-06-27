import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';
import Timeline from './components/Timeline/Timeline';

import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className='App'>
      <Header />
      <Timeline />
    </div>
  </ThemeProvider>
);

export default App;
