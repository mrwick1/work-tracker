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
import { notificationCheck } from '../../App';
const EndingTime = () => {
  const [endingTime, setEndingTime] = useState(false);
  const { shiftEndTime, currentTime } = useSelector((state) => state.timer);
  const { theme } = useSelector((state) => state.user);
  const [notificationCount, setNotificationCount] = useState(0);
  const [isFirstNotification, setIsFirstNotification] = useState(false);
  useEffect(() => {
    if (shiftEndTime) {
      setEndingTime(true);
    }
  }, [shiftEndTime]);

  useEffect(() => {
    if (currentTime && shiftEndTime) {
      console.log(
        moment(shiftEndTime).diff(moment(currentTime), 'minutes'),
        'akr'
      );
      if (moment(shiftEndTime).diff(moment(currentTime), 'minutes') === 0) {
        if (isFirstNotification) {
          setNotificationCount(notificationCount + 1);
          if (notificationCount < 1) {
            notificationCheck();
          }
        }
        setIsFirstNotification(true);
      }
    }
  }, [currentTime, shiftEndTime]);

  return (
    <StartingCard className={`${theme}-theme`}>
      <FlexBetween>
        <TextBorder className={`${theme}-line ${theme}-color`}>
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
