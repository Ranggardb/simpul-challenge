import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'learning redux toolkit', content: 'lets learn redux' },
  { id: '2', title: 'learning redux slice', content: 'lets learn slice' },
];

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    postTask: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllTask = (state) => state.task;

export const { postTask } = taskSlice.actions;
export default taskSlice.reducer;
