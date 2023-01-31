import React from 'react';
import { useSelector } from 'react-redux';
import { TimeMinContainer } from './TimeMinStyle';

const TimeMin = ({ mins = 40 }) => {
  const { theme } = useSelector((state) => state.user);
  return (
    <TimeMinContainer className={`${theme}-color`}>
      <img src='/work-tracker/assets/images/HourGlass.svg' alt='' />
      {mins}mins
    </TimeMinContainer>
  );
};

export default TimeMin;
