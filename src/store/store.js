import { configureStore } from '@reduxjs/toolkit';
import timerRedcuer from './../features/timer/timerSlice';
import userReducer from './../features/user/userSlice';
export const store = configureStore({
  reducer: {
    timer: timerRedcuer,
    user: userReducer,
  },
});
