import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Drop = {
  drop: boolean
};

const initialState: Drop = {
  drop: false
};

export const sliceDrop = createSlice({
  name: 'sliceDrop',
  initialState,
  reducers: {
    statusDrop: (state, actions: PayloadAction<boolean>) => {
      state.drop = actions.payload;
    }
  }
});

export const {
  statusDrop
} = sliceDrop.actions;

export default sliceDrop.reducer;