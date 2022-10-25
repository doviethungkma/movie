import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./features/commonSlice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
});

export type rootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
