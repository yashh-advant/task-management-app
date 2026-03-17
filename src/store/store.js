import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import uiSlice from './ui-slice';
import taskSlice from './task-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    tasks: taskSlice.reducer,
  },
});

export default store;
