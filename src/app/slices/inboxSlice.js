import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  message: [],
};

export const inboxSlice = createSlice({
  name: 'inbox',
  initialState,
  reducers: {
    setInbox: (state, action) => {
      state.message = action.payload;
    },
    postInbox: {
      reducer: (state, action) => {
        state.message.push(action.payload);
      },
      prepare: (userName, content) => {
        return {
          payload: {
            id: nanoid(),
            userName,
            content,
          },
        };
      },
    },
  },
});

export const selectInbox = (state) => state.inbox.message;

export const { setInbox } = inboxSlice.actions;
export default inboxSlice.reducer;
