import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBreak } from '../../features/timer/timerSlice';
import { To, ToText } from '../AddBreak/AddBreakStyle';
import TimeMin from '../TimeMin/TimeMin';
import { Delete, FlexTime, SingleCard, Time } from './SingleBreakStyle';

const SingleBreak = ({ empty, from, to, breakTime, id }) => {
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteBreak(id));
    const breakss = JSON.parse(localStorage.getItem('breaks')).filter(
      (item) => item.id !== id
    );

    localStorage.setItem('breaks', JSON.stringify(breakss));
  };

  if (empty) {
    return (
      <SingleCard>
        <FlexTime>
          <Time>No Records Found</Time>
        </FlexTime>
        <TimeMin mins={0} />
      </SingleCard>
    );
  } else {
    return (
      <SingleCard>
        <FlexTime>
          <Time>{moment(from).format('hh:mm A')}</Time>
          <To />
          <ToText>To</ToText>
          <Time>{moment(to).format('hh:mm A')}</Time>
        </FlexTime>
        <TimeMin mins={breakTime} />
        <Delete
          src='/work-tracker/assets/images/Delete.svg'
          onClick={() => deleteHandler(id)}
        />
      </SingleCard>
    );
  }
};

export default SingleBreak;
