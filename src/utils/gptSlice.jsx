import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch : false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
  // if showGptSearch is false then make it true, or if it is true then make it false
        state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const {toggleGptSearchView} = gptSlice.actions;
export default gptSlice.reducer;
