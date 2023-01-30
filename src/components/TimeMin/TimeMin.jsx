import React from 'react';
import { TimeMinContainer } from './TimeMinStyle';

const TimeMin = ({ mins = 40 }) => {
  return (
    <TimeMinContainer>
      <img src='/work-tracker/assets/images/HourGlass.svg' alt='' />
      {mins}mins
    </TimeMinContainer>
  );
};

export default TimeMin;
