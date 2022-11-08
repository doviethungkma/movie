import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "./../../interfaces/user";
import userApi from "./../../api/user";
import { IAuth } from "./../../interfaces/auth";

interface IState {
  users: Array<IUser>;
  auth: IAuth;
}

const initialState: IState = {
  users: [],
  auth: { username: "", password: "" },
};

export const getAllUser = createAsyncThunk(
  "/user/getAllUser",
  async (data, thunkApi) => {
    try {
      const response: any = await userApi.getAll();
      return response.users;
    } catch (error) {
      throw thunkApi.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllUser.fulfilled,
      (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload;
      }
    );
    builder.addCase(getAllUser.rejected, (state) => {
      state.users = [];
    });
  },
});

const { reducer } = userSlice;

export default reducer;
