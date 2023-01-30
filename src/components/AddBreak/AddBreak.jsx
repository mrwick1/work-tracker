import { DesktopTimePicker } from '@mui/x-date-pickers';
import React, { useEffect, useState } from 'react';
import {
  AddCard,
  AddSubTitle,
  FlexBetween,
  Minutes,
  TimeFlex,
  To,
  ToText,
} from './AddBreakStyle';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { addBreaks, setShiftEndTime } from '../../features/timer/timerSlice';

const AddBreak = () => {
  const [startingTime, setStartingTime] = useState();
  const [endingTime, setEndingTime] = useState();
  const dispatch = useDispatch();
  const { breaks, shiftStartTime, shiftEndTime, defaultWorkingMinutes } =
    useSelector((state) => state.timer);
  startingTime;

  const AddBreak = () => {
    if (moment(endingTime).diff(moment(startingTime), 'minutes') > 0) {
      const Break = {
        id: 'id' + Math.random().toString(16).slice(2),
        from: startingTime,
        to: endingTime,
        breakTime: moment(endingTime).diff(moment(startingTime), 'minutes'),
      };
      if (startingTime && endingTime) {
        dispatch(addBreaks(Break));
      }
      localStorage.setItem('breaks', JSON.stringify([...breaks, Break]));
    } else {
      alert('Please choose a valid time');
    }
  };

  return (
    <AddCard className='two-time'>
      <FlexBetween>
        <AddSubTitle>Add Break</AddSubTitle>
        <img
          src='/work-tracker/assets/images/Add.svg'
          alt=''
          onClick={AddBreak}
        />
      </FlexBetween>
      <TimeFlex>
        <DesktopTimePicker
          value={startingTime}
          onChange={(newValue) => {
            setStartingTime(newValue);
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
        <To />
        <ToText>To</ToText>
        <DesktopTimePicker
          value={endingTime}
          onChange={(newValue) => {
            setEndingTime(newValue);
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
      </TimeFlex>
      <Minutes>
        {moment(endingTime).diff(moment(startingTime), 'minutes')} mins
      </Minutes>
    </AddCard>
  );
};

export default AddBreak;
