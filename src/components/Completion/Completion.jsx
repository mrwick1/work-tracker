import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';
import { colors } from '../../const/theme';
import {
  Circle,
  ColorPad,
  CompleteCard,
  Desc,
  Flex,
  FlexMain,
  SubTitle,
  Tag,
} from './CompletionStyle';

const Completion = () => {
  const { shiftEndTime, shiftStartTime } = useSelector((state) => state.timer);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    getPercentage();
  }, [shiftEndTime, shiftStartTime]);
  const getPercentage = () => {
    console.log(shiftStartTime, 'akr');
    const balance = moment(shiftEndTime).diff(moment(moment()), 'minutes');
    const percentage1 = Math.floor((balance / 480) * 100);
    if (0 <= percentage1 && percentage1 < 101) {
      setPercentage(100 - percentage1);
    } else {
      setPercentage(0);
    }
  };

  return (
    <CompleteCard>
      <Circle>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </Circle>
      <SubTitle>Statistics</SubTitle>
      <Desc>(Total)</Desc>
      <FlexMain>
        <Flex>
          <ColorPad color={colors.blue} />
          <Tag>Completed</Tag>
        </Flex>
        <Flex>
          <ColorPad color={colors['gray-600']} />
          <Tag>Remaining</Tag>
        </Flex>
      </FlexMain>
    </CompleteCard>
  );
};

export default Completion;
