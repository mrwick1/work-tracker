import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shiftStartTime: {},
  shiftEndTime: {},
  defaultWorkingMinutes: 480,
  breaks: [],
  currentTime: {},
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setShiftStartTime: (state, action) => {
      state.shiftStartTime = action.payload;
    },
    setShiftEndTime: (state, action) => {
      state.shiftEndTime = action.payload;
    },
    addBreaks: (state, action) => {
      state.breaks = [...state.breaks, action.payload];
    },
    loadBreaks: (state, action) => {
      state.breaks = action.payload;
    },
    deleteBreak: (state, action) => {
      state.breaks = state.breaks.filter((item) => action.payload !== item.id);
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
  },
});

export const {
  setShiftStartTime,
  setShiftEndTime,
  addBreaks,
  loadBreaks,
  deleteBreak,
  setCurrentTime,
} = timerSlice.actions;
export default timerSlice.reducer;
