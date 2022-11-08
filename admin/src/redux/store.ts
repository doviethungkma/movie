import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./features/commonSlice";
import movieReducer from "./features/movieSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
    movie: movieReducer,
    user: userReducer,
  },
});

export type rootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
