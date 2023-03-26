import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isInboxOpen: false,
  isTaskOpen: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setIsInboxOpen: (state, action) => {
      state.isInboxOpen = action.payload;
    },
    setIsTaskOpen: (state, action) => {
      state.isTaskOpen = action.payload;
    },
  },
});

export const selectMenuIsInboxOpen = (state) => state.menu.isInboxOpen;
export const selectMenuIsTaskOpen = (state) => state.menu.isTaskOpen;

export const { setIsInboxOpen, setIsTaskOpen } = menuSlice.actions;
export default menuSlice.reducer;
