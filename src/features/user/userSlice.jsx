import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  theme: 'light',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setUser, setTheme } = userSlice.actions;

export default userSlice.reducer;
