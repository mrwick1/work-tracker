import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SingleBreak from '../SingleBreak/SingleBreak';
import {
  BreakCard,
  BreaksTitle,
  FlexBetween,
  ScrollView,
  Total,
} from './BreaksStyle';

const Breaks = () => {
  const { breaks } = useSelector((state) => state.timer);
  const [breakMin, setBreakMin] = useState(0);
  useEffect(() => {
    let min = 0;
    breaks &&
      breaks.map((item) => {
        min += item.breakTime;
      });
    setBreakMin(min);
  }, [breaks]);

  return (
    <BreakCard>
      <FlexBetween>
        <BreaksTitle>Breaks</BreaksTitle>
        <Total>
          Total <span>{breakMin}mins</span>
        </Total>
      </FlexBetween>
      <ScrollView>
        {breaks.length === 0 ? (
          <SingleBreak empty />
        ) : (
          breaks.map((item) => {
            return <SingleBreak {...item} />;
          })
        )}
      </ScrollView>
    </BreakCard>
  );
};

export default Breaks;
