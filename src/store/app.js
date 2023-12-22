import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import menuReducer from "./menuSlice";

export const store = configureStore({
  reducer: {
    cachedSearchSuggestion: searchReducer,
    isMenuOpen: menuReducer,
  },
});
