// import react
import { Link } from 'react-router-dom';
// import npm
import Particles from 'react-tsparticles';
// import style
import './home.scss';
// import assets
// import api
// import helper
import { getCurrentDate } from '@src/utils/common';
// import components

const Sda = () => {
  return (
    <Particles
      id="tsparticles"
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
      <nav id="navs" className="navs">
        <Link className="nav_item" to={`/clock/${homeDate}`}>
          Clock
        </Link>
        <Link className="nav_item" to={`/count_down/${homeDate}`}>
          Count Down
        </Link>
        <Link className="nav_item" to="/test">
          Test
        </Link>
      </nav>
      <div className="particle">
        <Sda />
      </div>
    </>
  );
};

export default Home;
