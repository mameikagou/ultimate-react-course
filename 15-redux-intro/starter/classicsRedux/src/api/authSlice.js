// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRefreshing: false,
  refreshTokenPromise: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startRefreshing: (state) => {
      state.isRefreshing = true;
      state.refreshTokenPromise = null;
    },
    setRefreshTokenPromise: (state, action) => {
      state.refreshTokenPromise = action.payload;
    },
    finishRefreshing: (state) => {
      state.isRefreshing = false;
    },
  },
});

export const { startRefreshing, setRefreshTokenPromise, finishRefreshing } = authSlice.actions;

export default authSlice.reducer;