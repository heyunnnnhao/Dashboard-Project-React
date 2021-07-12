export const getCurrentTime = function () {
  let args = Object.values(arguments);
  let date = new Date();
  let datetime = {
    year: date.getFullYear(),
    month: '-' + (date.getMonth() + 1),
    day: '-' + date.getDate(),
    hour: date.getHours() < 10 ? ' 0' + date.getHours() : ' ' + date.getHours(),
    minute: date.getMinutes() < 10 ? ':0' + date.getMinutes() : ':' + date.getMinutes(),
    second: date.getSeconds() < 10 ? ':0' + date.getSeconds() : ':' + date.getSeconds(),
  };
  let arr = [];
  args.forEach((i) => {
    arr.push(datetime[i]);
  });
  return arr.join('');
};

export const getTimeDiff = function (start, end) {
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
  // If using time pickers with 24 hours format, add the below line get exact hours
  if (hours < 0) hours = hours + 24;

  return (
    (hours < 10 ? '0' : '') +
    hours +
    ':' +
    (minutes < 10 ? '0' : '') +
    minutes +
    ':' +
    (seconds < 10 ? '0' : '') +
    seconds
  );
};
