import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import './index.scss';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import { AuthProvider, RequireAuth } from './common/auth/auth';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './common/style/theme';

import { Header } from './components/index';
import { Home, NotFound, Login, CountDown, Clock, Test } from './pages/index';


const App = () => {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route element={<Login />} path='/' />
        <Route
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
          path='/home'
        />
        <Route
          element={
            <RequireAuth>
              <CountDown />
            </RequireAuth>
          }
          path='/count_down/:homeDate'
        />
        <Route
          element={
            <RequireAuth>
              <Clock />
            </RequireAuth>
          }
          path='/clock'
        />
        <Route
          element={
            <RequireAuth>
              <Test />
            </RequireAuth>
          }
          path='/test'
        />
        <Route element={<NotFound />} path='*' />
      </Routes>
    </AuthProvider>
  );
};

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
