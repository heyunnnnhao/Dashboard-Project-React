import React, { Fragment, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import './index.scss';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';

import { Header } from './components/index';
import { Home, NotFound, CountDown, Clock, Test } from './pages/index';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route index element={<Home />} path='/' />
        <Route element={<CountDown />} path='/count_down/:homeDate' />
        <Route element={<Clock />} path='/clock' />
        <Route element={<Test />} path='/test' />
        <Route element={<NotFound />} path='*' />
      </Routes>
    </Fragment>
  );
};

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
