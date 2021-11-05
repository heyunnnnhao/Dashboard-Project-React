// Hooks
import { useState, useEffect } from 'react';
import { formatTime } from './day';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export const useTime = (isUTC = false, updateInterval = 500) => {
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');

  const updateTime = () => {
    let date = new Date();
    setHour(formatTime(isUTC ? date.getUTCHours() : date.getHours()));
    setMinute(formatTime(date.getMinutes()));
    setSecond(formatTime(date.getSeconds()));
  };

  useEffect(() => {
    updateTime();
    let tick = setInterval(() => {
      updateTime();
    }, updateInterval);
    return () => clearInterval(tick);
  }, []);

  return { hour, minute, second };
};

export const useTimeDiff = (target) => {};

export const useDateDiff = (target) => {};
