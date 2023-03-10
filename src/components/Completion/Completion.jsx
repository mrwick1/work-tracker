import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../const/theme';
import {
  loadBreaks,
  setShiftEndTime,
  setShiftStartTime,
} from '../../features/timer/timerSlice';
import { setTheme } from '../../features/user/userSlice';
import {
  AdminIcon,
  Avatar,
  Circle,
  ColorPad,
  CompleteCard,
  CompleteCard2,
  Desc,
  Flex,
  FlexB,
  FlexMain,
  Name,
  Reset,
  SubTitle,
  Tag,
  Title,
  Toggle,
} from './CompletionStyle';

const Completion = () => {
  const {
    shiftEndTime,
    shiftStartTime,
    breaks,
    defaultWorkingMinutes,
    currentTime,
  } = useSelector((state) => state.timer);
  const { user } = useSelector((state) => state.user);

  const { theme } = useSelector((state) => state.user);
  const [percentage, setPercentage] = useState(0);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [animationEnable, setAnimationEnable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getPercentage();
  }, [shiftEndTime, shiftStartTime, breaks, currentTime]);

  const getPercentage = () => {
    const balance = moment(shiftEndTime).diff(moment(currentTime), 'minutes');
    const percentage1 = Math.floor((balance / 480) * 100);
    if (0 <= percentage1 && percentage1 < 101) {
      setPercentage(100 - percentage1);
    } else {
      setPercentage(0);
    }
  };

  const clearTimer = () => {
    localStorage.setItem('startTime', currentTime);
    localStorage.setItem('breaks', []);
    dispatch(loadBreaks([]));
    dispatch(setShiftStartTime(currentTime));
    dispatch(
      setShiftEndTime(moment(currentTime).add(defaultWorkingMinutes, 'minutes'))
    );
  };

  return isAboutVisible ? (
    <CompleteCard2
      className={`${theme}-theme`}
      animationEnable={animationEnable}
    >
      <AdminIcon
        src='/work-tracker/assets/images/Admin.svg'
        onClick={() => {
          setIsAboutVisible(!isAboutVisible);
          setAnimationEnable(true);
        }}
      />
      <Reset src='/work-tracker/assets/images/Reset.svg' onClick={clearTimer} />
      <Title>GithuB Profile</Title>
      <FlexB>
        <a href={user?.html_url} target='_blank'>
          <Avatar src={user?.avatar_url} className='img-avatar' />
        </a>
        <div>
          <Name>
            <span>Name:</span> {user?.name}
          </Name>
          <Name>
            {' '}
            <span>Bio:</span> {user?.bio} ????
          </Name>
        </div>
      </FlexB>
    </CompleteCard2>
  ) : (
    <CompleteCard
      animationEnable={animationEnable}
      className={`${theme}-theme`}
    >
      <Toggle>
        <input
          type='checkbox'
          id='theme-toggle'
          checked={theme === 'dark'}
          onClick={() => {
            localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
            dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
          }}
        />
        <label for='theme-toggle'></label>
      </Toggle>
      <AdminIcon
        src='/work-tracker/assets/images/Admin.svg'
        onClick={() => {
          setIsAboutVisible(!isAboutVisible);
          setAnimationEnable(true);
        }}
      />

      <Circle>
        <CircularProgressbar
          value={percentage}
          text={`${percentage === 0 ? '???' : percentage + '%'}`}
        />
      </Circle>
      <SubTitle>Statistics</SubTitle>
      <Desc className={`${theme}-theme`}>(Total)</Desc>
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
