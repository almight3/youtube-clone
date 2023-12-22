import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: true,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setIsMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { setIsMenuOpen } = menuSlice.actions;

export default menuSlice.reducer;
