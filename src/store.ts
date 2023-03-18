import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./features/todos/todosApi";
import uiSlice from "./features/uiState/uiSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    uiSlice: uiSlice,
    userSlice: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
