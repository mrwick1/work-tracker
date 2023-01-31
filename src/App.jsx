import React, { useEffect, useState } from 'react';
import Home from './view/Home';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store/store';
import {
  addBreaks,
  loadBreaks,
  setShiftEndTime,
  setShiftStartTime,
} from './features/timer/timerSlice';
import moment from 'moment';
import axios from 'axios';
import { setTheme, setUser } from './features/user/userSlice';
const App = () => {
  const dispatch = useDispatch();
  const { shiftStartTime, defaultWorkingMinutes, breaks } = useSelector(
    (state) => state.timer
  );
  const { theme } = useSelector((state) => state.user);
  const getProfile = async () => {
    const user = await axios.get('https://api.github.com/users/mrwick1');
    dispatch(setUser(user.data));
  };

  useEffect(() => {
    dispatch(
      setShiftEndTime(
        moment(shiftStartTime).add(defaultWorkingMinutes, 'minutes')
      )
    );
  }, [shiftStartTime]);
  useEffect(() => {
    const Starttime = localStorage.getItem('startTime');
    if (Starttime) {
      if (
        moment(Starttime).format('DD-MM-YYYY') === moment().format('DD-MM-YYYY')
      ) {
        dispatch(setShiftStartTime(Starttime));
      } else {
        localStorage.removeItem('startTime');
      }
    }
    getProfile();
  }, []);

  useEffect(() => {
    const breaksLocal = localStorage.getItem('breaks');
    const themeLocal = localStorage.getItem('theme');
    if (breaksLocal) {
      dispatch(loadBreaks(JSON.parse(breaksLocal)));
    }
    if (themeLocal) {
      dispatch(setTheme(themeLocal));
    }
  }, []);
  useEffect(() => {
    let totalMinutes = 0;
    if (breaks.length !== 0) {
      breaks.map((item) => {
        totalMinutes += item.breakTime;
      });
      dispatch(
        setShiftEndTime(
          moment(shiftStartTime).add(
            defaultWorkingMinutes + totalMinutes,
            'minutes'
          )
        )
      );
    }
  }, [breaks]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Home />
    </LocalizationProvider>
  );
};

export const notificationCheck = () => {
  if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification('Completed', {
          body: 'Daily shift has been completed',
        });
      }
    });
  }
};

export default App;
