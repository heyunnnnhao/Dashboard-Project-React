import { Link, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import './app.scss';
import { CountDown, Clock, Test } from './pages/index.ts';
import Particles from 'react-tsparticles';
import { getCurrentDate } from '@src/utils/common';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import FormatAlignCenterSharpIcon from '@mui/icons-material/FormatAlignCenterSharp';

const Whoops = () => {
  let location = useLocation();
  return (
    <div>
      <span className='not_found'>
        Location <span>{location.pathname}</span> does not exist!
      </span>
    </div>
  );
};

const Header = () => {
  let location = useLocation();
  return (
    <header className='app_header'>
      <Link className='back' to='/'>
        {location.pathname === '/' ? <FormatAlignCenterSharpIcon /> : <ArrowBackIosSharpIcon />}
      </Link>
    </header>
  );
};

const Footer = () => {
  let location = useLocation();
  let date = new Date();
  if (location.pathname === '/') {
    return <footer className='app_footer'>&copy; Copyright 2020-{date.getFullYear()} @Yunhao He &nbsp;</footer>;
  } else {
    return null;
  }
};

const ParticlesEffect = () => {
  return (
    <Particles
      id='tsparticles'
      options={{
        background: {
          color: {
            value: '#282c34',
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 1,
            },
            grab: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: true,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            // random: true,
            value: 2,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

const Home = () => {
  let homeDate = getCurrentDate('year', 'month', 'day');

  return (
    <>
      <nav id='navs' className='navs'>
        <Link className='nav_item' to='/clock'>
          Clock
        </Link>
        <Link className='nav_item' to={`/count_down/${homeDate}`}>
          Count Down
        </Link>
        <Link className='nav_item' to='/test'>
          Test
        </Link>
      </nav>
      <Outlet />
      <div className='particle'>
        <ParticlesEffect />
      </div>
    </>
  );
};

export default () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path='/'>
          <Route element={<CountDown />} path='/count_down/:homeDate' />
          <Route element={<Clock />} path='/clock' />
          <Route element={<Test />} path='/test' />
          <Route element={<Whoops />} path='*' />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};
