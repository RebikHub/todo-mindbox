import sliceSort from './sliceSort';
import sliceDrop from './sliceDrop';
import sliceTasks from './sliceTasks';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    sliceTasks,
    sliceDrop,
    sliceSort
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;