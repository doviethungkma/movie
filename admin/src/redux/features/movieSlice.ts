import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/movie";
import movieApi from "./../../api/movieApi";

interface IState {
  isShowMoviePopup: boolean;
  isShowAddMovie: boolean;
  isShowEditMovie: boolean;
  movies: Array<IMovie>;
}

const initialState: IState = {
  isShowMoviePopup: false,
  isShowAddMovie: false,
  isShowEditMovie: false,
  movies: [],
};

export const getAllMovie = createAsyncThunk(
  "/movie/getAllMovie",
  async (data, thunkApi) => {
    try {
      const response: any = await movieApi.getAll();
      return response.movies;
    } catch (error: any) {
      throw thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editMovie = createAsyncThunk(
  "/movie/editMovie",
  async (id, thunkApi) => {
    try {
    } catch (error) {}
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    showMoviePopup: (state) => {
      state.isShowMoviePopup = true;
    },
    hideMoviePopup: (state) => {
      state.isShowMoviePopup = false;
    },
    showAddMovie: (state) => {
      state.isShowAddMovie = true;
    },
    hideAddMovie: (state) => {
      state.isShowAddMovie = false;
    },
    showEditMovie: (state) => {
      state.isShowEditMovie = true;
    },
    hideEditMovie: (state) => {
      state.isShowEditMovie = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getAllMovie.fulfilled,
      (state, action: PayloadAction<IMovie[]>) => {
        state.movies = action.payload;
      }
    );
    builder.addCase(getAllMovie.rejected, (state) => {
      state.movies = [];
    });
  },
});

const { reducer } = movieSlice;
export const {
  showMoviePopup,
  hideMoviePopup,
  showAddMovie,
  hideAddMovie,
  showEditMovie,
  hideEditMovie,
} = movieSlice.actions;

export default reducer;
