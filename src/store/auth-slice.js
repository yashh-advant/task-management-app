import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userDetails: null,
  },
  reducers: {
    login: (state, action) => {
      state.userDetails = action.payload;
    },
    logout: state => {
      state.userDetails = null;
    },
  },
});

export default authSlice;
export const authActions = authSlice.actions;
