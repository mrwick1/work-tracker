import { configureStore } from '@reduxjs/toolkit';
import timerRedcuer from './../features/timer/timerSlice';

export const store = configureStore({
  reducer: {
    timer: timerRedcuer,
  },
});
