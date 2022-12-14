import { createSlice } from "@reduxjs/toolkit";

interface IState {
  isShowSideBar: boolean;
}

const initialState: IState = {
  isShowSideBar: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isShowSideBar = !state.isShowSideBar;
    },
  },
});

const { reducer } = commonSlice;
export const { toggleSideBar } = commonSlice.actions;

export default reducer;
