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
      if (!state.items.find((e) => e.text === actions.payload.text)) {
        state.items = [...state.items, actions.payload];
      };
    },
    clearCompletedTasks: (state) => {
      state.items = [...state.items.filter((e) => !e.done)];
    },
    editTask: (state, actions: PayloadAction<IItem>) => {
      state.items.map((e) => {
        if (e.text === actions.payload.text) {
          e.done = actions.payload.done;
        };
        return e;
      })
    }
  }
});

export const {
  writeStorageToStore,
  addTask,
  clearCompletedTasks,
  editTask
} = sliceTasks.actions;

export default sliceTasks.reducer;