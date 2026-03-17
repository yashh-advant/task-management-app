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
    editTask: (state, action) => {
      state.tasks = state.tasks.map(task =>
        task.id == action.payload.id ? { ...action.payload } : task
      );
    },
  },
});

export default taskSlice;

export const taskActions = taskSlice.actions;
