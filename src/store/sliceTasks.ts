import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem, Items, Tasks } from "../interfaces/interfaces";

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
      state.items = [...actions.payload];
    },
    addTask: (state, actions: PayloadAction<IItem>) => {
      state.items = [...state.items, actions.payload];
    },
    clearCompletedTasks: (state) => {
      state.items = [...state.items.filter((e) => !e.done)];
    }
  }
});

export const {
  writeStorageToStore,
  addTask,
  clearCompletedTasks
} = sliceTasks.actions;

export default sliceTasks.reducer;