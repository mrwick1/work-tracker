import React, { useEffect, useRef, useState } from 'react';
import {
  Date,
  FlexBetween,
  NoDate,
  StartingCard,
  TextBorder,
} from './EndingTimeStyle';
import TextField from '@mui/material/TextField';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { useSelector } from 'react-redux';
import moment from 'moment';
const EndingTime = () => {
  const [endingTime, setEndingTime] = useState(false);
  const { shiftEndTime } = useSelector((state) => state.timer);

  useEffect(() => {
    if (shiftEndTime) {
      setEndingTime(true);
    }
  }, [shiftEndTime]);

  return (
    <StartingCard>
      <FlexBetween>
        <TextBorder>
          Ending Time
          <span>Shift Ending Time</span>
        </TextBorder>
      </FlexBetween>
      {endingTime ? (
        <Date>
          {moment(shiftEndTime).format('hh:mm A') === 'Invalid date'
            ? '-- : -- --'
            : moment(shiftEndTime).format('hh:mm A')}
        </Date>
      ) : (
        <NoDate>-- : -- --</NoDate>
      )}
    </StartingCard>
  );
};

export default EndingTime;
