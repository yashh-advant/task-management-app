import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id == action.payload);
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export default taskSlice;

export const taskActions = taskSlice.actions;
