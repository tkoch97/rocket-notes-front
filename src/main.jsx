import React from 'react';
import ReactDOM from 'react-dom/client';
import { Details } from './pages/Details';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { NewNote } from './pages/NewNote';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = { theme }>
      <GlobalStyles />
      <NewNote />
    </ThemeProvider>
  </React.StrictMode>,
)
