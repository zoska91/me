import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';

import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className='App'>
      <Header />
    </div>
  </ThemeProvider>
);

export default App;
