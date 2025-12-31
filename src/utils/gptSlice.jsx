import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    
  },
  reducers: {
    toggleGptSearchView: (state) => {
      // if showGptSearch is false then make it true, or if it is true then make it false
      state.showGptSearch = !state.showGptSearch;
    },

    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearGptMovieResults: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults, clearGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
