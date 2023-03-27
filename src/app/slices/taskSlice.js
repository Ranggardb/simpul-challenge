import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    label: 'Close off Case #012920- RODRIGUES, Amiguel',
    content:
      'Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!',
    date: '2023-06-12T00:00:00.000Z',
    done: true,
  },
  {
    id: 2,
    label:
      'Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203',
    content:
      'All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.',
    date: '2023-12-14T00:00:00.000Z',
    done: false,
  },
  {
    id: 3,
    label:
      'Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!',
    content:
      'Homeworks needed to be checked are as follows : Client Profile Questionnaire, Passport Requirements and Images, Personal Documents.',
    date: '2023-04-06T00:00:00.000Z',
    done: true,
  },
];

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    postTask: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (label, content, date, done) => {
        return {
          payload: {
            id: nanoid(),
            label,
            content,
            date,
            done,
          },
        };
      },
    },
    editTask: (state, action) => {
      console.log(action);
      // (taskList, id, payload) =>
      //   taskList.map((task) =>
      //     task.id === id ? { ...task, content: payload } : task
      //   );
      state = action.payload;
    },
  },
});

export const selectAllTask = (state) => state.task;

export const { postTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
