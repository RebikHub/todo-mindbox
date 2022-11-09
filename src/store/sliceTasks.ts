import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem, Items, Tasks } from "../interfaces/interfaces";

const initialState: Items = {
  items: [
    {
      text: 'Do it task',
      done: false,
      id: '1'
    },
    {
      text: 'Task is Done!',
      done: true,
      id: '2'
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
      if (!state.items.find((e) => e.id === actions.payload.id)) {
        state.items = [...state.items, actions.payload];
      };
    },
    clearCompletedTasks: (state) => {
      state.items = [...state.items.filter((e) => !e.done)];
    },
    editTask: (state, actions: PayloadAction<IItem>) => {
      state.items.map((e) => {
        if (e.id === actions.payload.id) {
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