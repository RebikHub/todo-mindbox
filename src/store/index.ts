import sliceDrop from './sliceDrop';
import sliceTasks from './sliceTasks';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    sliceTasks,
    sliceDrop
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof configureStore>;