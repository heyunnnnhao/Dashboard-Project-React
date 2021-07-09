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
