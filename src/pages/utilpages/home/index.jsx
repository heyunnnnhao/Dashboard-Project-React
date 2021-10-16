import { Link, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.scss';
import { getCurrentDate } from '@common/utils';

const ParticlesEffect = () => {
  return (
    <Particles
      id='tsparticles'
      options={{
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
              value_area: 1800,
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
            random: true,
            value: 2,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

const Footer = () => {
  let date = new Date();
  return (
    <footer className='app_footer'>
      <span> &copy; Copyright 2020-{date.getFullYear()} @Yunhao He &nbsp;</span>
      <GitHubIcon fontSize='small' onClick={() => window.open('https://github.com/heyunnnnhao', '_blank').focus()} />
    </footer>
  );
};

const HomeCard = ({ to, text }) => {
  return (
    <Link className='nav_item' to={to}>
      {text}
    </Link>
  );
};

export default () => {
  let homeDate = getCurrentDate('year', 'month', 'day');

  return (
    <>
      <nav id='navs' className='navs'>
        <HomeCard to='/clock' text='Clock' />
        <HomeCard to={`/count_down/${homeDate}`} text='Count Down' />
        <HomeCard to='/test' text='Test' />
      </nav>
      <ParticlesEffect className='tsparticle' />
      <Footer />
    </>
  );
};
