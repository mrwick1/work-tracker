import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FlexTime, Remaining, Time, TimeCard } from './TimeRemainingStyle';

const TimeRemaining = () => {
  const { shiftEndTime, breaks, shiftStartTime } = useSelector(
    (state) => state.timer
  );
  const { theme } = useSelector((state) => state.user);

  const [totalMinutes, setTotalMinutes] = useState(0);
  useEffect(() => {
    setTotalMinutes(moment(shiftEndTime).diff(moment(moment()), 'minutes'));
  }, [shiftEndTime, breaks, shiftStartTime]);

  const remaining =
    isNaN(totalMinutes) || totalMinutes < 0
      ? `${Math.floor(0 / 60)}h ${0 - Math.floor(0 / 60) * 60}m`
      : `${Math.floor(totalMinutes / 60)}h ${
          totalMinutes - Math.floor(totalMinutes / 60) * 60
        }m`;
  return (
    <TimeCard className={`${theme}-theme`}>
      <FlexTime>
        <img src='/work-tracker/assets/images/Hourglass.png' alt='' />
        <div>
          <Time>{remaining}</Time>
          <Remaining>Remaining</Remaining>
        </div>
      </FlexTime>
    </TimeCard>
  );
};

export default TimeRemaining;
