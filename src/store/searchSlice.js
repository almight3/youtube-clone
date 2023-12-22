import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cachedAutoSearchSuggestion: {},
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    cacheSuggestions: (state, action) => {
      const cachedResult = {
        ...state.cachedAutoSearchSuggestion,
        ...action.payload,
      };
      state.cachedAutoSearchSuggestion = cachedResult;
    },
  },
});

export const { cacheSuggestions } = searchSlice.actions;

export default searchSlice.reducer;
