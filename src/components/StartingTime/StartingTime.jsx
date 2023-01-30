import React, { useEffect, useRef, useState } from 'react';
import { FlexBetween, StartingCard, TextBorder } from './StartingTimeStyle';
import TextField from '@mui/material/TextField';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  setShiftEndTime,
  setShiftStartTime,
} from '../../features/timer/timerSlice';
const StartingTime = () => {
  const hours = 9;
  const dispatch = useDispatch();
  const minutes = 0;
  const date = moment('2023-01-26').set('hour', hours).set('minute', minutes);
  const { shiftStartTime, shiftEndTime, defaultWorkingMinutes } = useSelector(
    (state) => state.timer
  );

  return (
    <StartingCard>
      <FlexBetween>
        <TextBorder>
          Starting Time
          <span>Shift Starting Time</span>
        </TextBorder>
        <img src='/work-tracker/assets/images/Edit.svg' alt='' />
      </FlexBetween>
      <DesktopTimePicker
        value={shiftStartTime}
        onChange={(newValue) => {
          dispatch(setShiftStartTime(newValue));
          localStorage.removeItem('startTime');
          localStorage.setItem('startTime', newValue);
        }}
        renderInput={(params) => (
          <TextField
            variant='standard'
            InputProps={{
              disableUnderline: true,
            }}
            {...params}
          />
        )}
      />
    </StartingCard>
  );
};

export default StartingTime;
