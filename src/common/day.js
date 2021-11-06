import { useEffect } from 'react';
import { useTime } from './hooks';

export const formatTime = (time) => {
  return time < 10 ? '0' + time : time;
};

export const getCurrentDate = function () {
  let args = Object.values(arguments);
  let date = new Date();
  let weeks = { 1: 'Mon.', 2: 'Tue.', 3: 'Wed.', 4: 'Thu.', 5: 'Fri.', 6: 'Sat.', 7: 'Sun.' };
  let day = {
    year: formatTime(date.getFullYear()),
    month: formatTime(date.getMonth() + 1),
    day: formatTime(date.getDate()),
    week: weeks[date.getDay()],
  };
  let arr = [];
  args.forEach((i) => {
    arr.push(day[i]);
  });
  return arr.join('-');
};

export const getTimeDiff = (start, end) => {
  if (start === end) return '';
  start = start.split(':');
  end = end.split(':');
  let startDate = new Date(0, 0, 0, start[0], start[1], start[2]);
  let endDate = new Date(0, 0, 0, end[0], end[1], end[2]);
  let diff = endDate.getTime() - startDate.getTime();
  let hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  let minutes = Math.floor(diff / 1000 / 60);
  diff -= minutes * 1000 * 60;
  let seconds = Math.floor(diff / 1000);
  if (hours < 0) hours = hours + 24;
  return formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
};

export const ClockFace = ({ hr, min, sec, uid }) => {
  const move = () => {
    let HOURHAND = document.getElementById(`hour${uid}`);
    let MINUTEHAND = document.getElementById(`minute${uid}`);
    let SECONDHAND = document.getElementById(`second${uid}`);

    let hrPosition = (hr * 360) / 12 + (min * 6) / 12 + 6;
    let minPosition = (min * 360) / 60 + (sec * 6) / 60 + 0.1;
    let secPosition = (sec * 360) / 60 + 30 / 3600;
    //rotate
    HOURHAND.style.transform = 'rotate(' + hrPosition + 'deg)';
    MINUTEHAND.style.transform = 'rotate(' + minPosition + 'deg)';
    SECONDHAND.style.transform = 'rotate(' + secPosition + 'deg)';
  };

  useEffect(() => {
    move();
  }, [sec]);

  return (
    <div className='clockbox'>
      <svg id='clock' xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'>
        <g id='face'>
          <circle className='circle' cx='300' cy='300' r='253.9' />
          <path
            className='hour-marks'
            d='M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6'
          />
          <circle className='mid-circle' cx='300' cy='300' r='16.2' />
        </g>
        <g id={`hour${uid}`} className='hour'>
          <path className='hour-arm' d='M300.5 298V142' />
          <circle className='sizing-box' cx='300' cy='300' r='253.9' />
        </g>
        <g id={`minute${uid}`} className='minute'>
          <path className='minute-arm' d='M300.5 298V67' />
          <circle className='sizing-box' cx='300' cy='300' r='253.9' />
        </g>
        <g id={`second${uid}`} className='second'>
          <path className='second-arm' d='M300.5 350V55' />
          <circle className='sizing-box' cx='300' cy='300' r='253.9' />
        </g>
      </svg>
    </div>
  );
};
