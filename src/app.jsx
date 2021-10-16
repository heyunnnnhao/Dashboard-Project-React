import { Routes, Route } from 'react-router-dom';
import './app.scss';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';

import { Header, Footer } from './components/index';
import { Home, NotFound, CountDown, Clock, Test } from './pages/index';

export default () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} path='/' />
        <Route element={<CountDown />} path='/count_down/:homeDate' />
        <Route element={<Clock />} path='/clock' />
        <Route element={<Test />} path='/test' />
        <Route element={<NotFound />} path='*' />
      </Routes>
      <Footer />
    </>
  );
};
