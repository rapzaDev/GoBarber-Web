import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
