const formatTime = (time) => {
  time = time < 10 ? '0' + time : time;
  return time;
};

export const getCurrentTime = function() {
  let args = Object.values(arguments);
  let date = new Date();
  let time = {
    hour: formatTime(date.getHours()),
    minute: formatTime(date.getMinutes()),
    second: formatTime(date.getSeconds()),
  };
  let arr = [];
  args.forEach((i) => {
    arr.push(time[i]);
  });
  return arr.join(':');
};

export const getCurrentDate = function() {
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

export const getTimeDiff = function(start, end) {
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
