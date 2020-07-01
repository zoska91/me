import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import Indicator from './components/Shared/Indicator';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

const Timeline = React.lazy(() => import('./components/Timeline/Timeline'));

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Suspense fallback={<Indicator />}>
      <ReactNotification />
      <Header />
      <Timeline />
      <Footer />
    </Suspense>
  </ThemeProvider>
);

export default App;
