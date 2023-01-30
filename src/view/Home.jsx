import React from 'react';
import AddBreak from '../components/AddBreak/AddBreak';
import Breaks from '../components/Breaks/Breaks';
import Completion from '../components/Completion/Completion';
import EndingTime from '../components/EndingTime/EndingTime';
import StartingTime from '../components/StartingTime/StartingTime';
import TimeRemaining from '../components/TimeRemaining/TimeRemaining';
import { Container, Grid } from './HomeStyle';

const Home = () => {
  return (
    <Container>
      <Grid>
        <Completion />
        <TimeRemaining />
        <StartingTime />
        <EndingTime />
        <AddBreak />
        <Breaks />
      </Grid>
    </Container>
  );
};

export default Home;
