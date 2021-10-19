import { FormEvent, Fragment, StrictMode, useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import Particles from 'react-tsparticles';
import './style.scss';
import { useAuth } from '../../../common/auth/auth';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();
  let auth = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    if (!username || !password) return;
    if (username && password && username.length > 0) {
      auth.signin(username, () => {
        navigate('./home', { replace: true });
      });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='login'>
        <FormControl className='loginItem' sx={{ m: 1, width: '25ch' }} variant='outlined' color='info'>
          <InputLabel htmlFor='outlined-adornment-password'>Username</InputLabel>
          <OutlinedInput
            id='outlined-adornment-username'
            type='text'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label='Username'
            autoComplete='off'
          />
        </FormControl>

        <FormControl className='loginItem' sx={{ m: 1, width: '25ch' }} variant='outlined' color='info'>
          <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton aria-label='toggle password visibility' onClick={() => setShowPassword(!showPassword)} edge='end'>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
            autoComplete='off'
          />
        </FormControl>
        <Button type='submit' className='loginItem' variant='outlined'>
          Submit
        </Button>
      </form>
      <Footer />
      <ParticlesEffect className='tsparticle' />
    </>
  );
};
