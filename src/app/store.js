import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from "@reduxjs/toolkit/dist/query";
// import { productApi } from "./services/productApi";
import userSlice from './slices/userSlice';
import menuSlice from './slices/menuSlice';
import inboxSlice from './slices/inboxSlice';
import taskSlice from './slices/taskSlice';

export const store = configureStore({
  reducer: {
    // [productApi.reducerPath]: productApi.reducer,
    user: userSlice,
    menu: menuSlice,
    inbox: inboxSlice,
    task: taskSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(productApi.middleware),
});

// setupListeners(store.dispatch);
