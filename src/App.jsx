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
const App = () => {
  const dispatch = useDispatch();
  const { shiftStartTime, defaultWorkingMinutes, breaks } = useSelector(
    (state) => state.timer
  );
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
  }, []);

  useEffect(() => {
    const breaksLocal = localStorage.getItem('breaks');
    if (breaksLocal) {
      dispatch(loadBreaks(JSON.parse(breaksLocal)));
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

export default App;
