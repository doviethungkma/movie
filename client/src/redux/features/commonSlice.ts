import { createSlice } from "@reduxjs/toolkit";

interface IState {
  isShowLogin: boolean;
  isShowMenu: boolean;
  isShowSignup: boolean;
}

const initialState: IState = {
  isShowLogin: false,
  isShowMenu: false,
  isShowSignup: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    showLogin: (state) => {
      state.isShowLogin = true;
    },
    hideLogin: (state) => {
      state.isShowLogin = false;
    },
    showSignup: (state) => {
      state.isShowSignup = true;
    },
    hideSignup: (state) => {
      state.isShowSignup = false;
    },
    toggleMenu: (state) => {
      state.isShowMenu = !state.isShowMenu;
    },
    showMenu: (state) => {
      state.isShowMenu = true;
    },
    hideMenu: (state) => {
      state.isShowMenu = false;
    },
  },
});

const { reducer } = commonSlice;
export const {
  showLogin,
  hideLogin,
  showSignup,
  hideSignup,
  showMenu,
  hideMenu,
  toggleMenu,
} = commonSlice.actions;

export default reducer;
