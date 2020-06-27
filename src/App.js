import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import Header from './components/Header/Header';
import Timeline from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';

import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ReactNotification />
    <Header />
    <Timeline />
    <Footer />
  </ThemeProvider>
);

export default App;
