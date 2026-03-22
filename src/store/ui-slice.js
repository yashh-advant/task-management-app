import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    searchText: '',
    darkTheme: true,
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    toggleTheme: state => {
      state.darkTheme = !state.darkTheme;
    },
    setDarkTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
