import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Items, Tasks } from '../interfaces/interfaces';

const initialState: Items = {
  items: []
};

export const sliceSort = createSlice({
  name: 'sliceSort',
  initialState,
  reducers: {
    showAll: (state, actions: PayloadAction<Tasks>) => {
      state.items = [...actions.payload];
    },
    sortActive: (state, actions: PayloadAction<Tasks>) => {
      state.items = [...actions.payload.filter((e) => !e.done)];
    },
    sortCompleted: (state, actions: PayloadAction<Tasks>) => {
      state.items = [...actions.payload.filter((e) => e.done)];
    }
  }
});

export const {
  showAll,
  sortActive,
  sortCompleted
} = sliceSort.actions;

export default sliceSort.reducer;