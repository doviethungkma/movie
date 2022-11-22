import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/movie";

interface ICommonSliceState {
  isShowMenu: boolean;
}

const initialState: ICommonSliceState = {
  isShowMenu: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    showMenu: (state) => {
      state.isShowMenu = true;
    },
    hideMenu: (state) => {
      state.isShowMenu = false;
    },
  },
});

const { reducer } = commonSlice;
export const { showMenu, hideMenu } = commonSlice.actions;

export default reducer;
