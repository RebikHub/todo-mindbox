import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem, Tasks } from "../interfaces/interfaces";

type Items = {
  items: Tasks
};

const initialState: Items = {
  items: [
    {
      text: 'Do it task',
      done: false
    },
    {
      text: 'Task is Done!',
      done: true
    }
  ]
};

export const sliceTasks = createSlice({
  name: 'sliceTasks',
  initialState,
  reducers: {
    writeStorageToStore: (state, actions: PayloadAction<Tasks>) => {
      stat
    },
    addTask: (state, actions: PayloadAction<IItem>) => {
      state.items = [...state.items, actions.payload];
    },
    clearCompletedTasks: (state) => {
      state.items.filter((e) => e.done);
    }
  }
});

export const {
  addTask,
  clearCompletedTasks
} = sliceTasks.actions;

export default sliceTasks.reducer;