import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './common/style/theme';
import { AppProvider } from './common/AppContext';

import App from './App';

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
