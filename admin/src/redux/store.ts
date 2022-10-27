import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./features/commonSlice";
import movieReducer from "./features/movieSlice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
    movie: movieReducer,
  },
});

export type rootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
