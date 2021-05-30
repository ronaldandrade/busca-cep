import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/globals'
import Routes from './routes';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
    <GlobalStyle />
    </>
  );
}

export default App;
