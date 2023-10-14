import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuOpen: true,
  },
  reducers: {
    toggleMenuOpen(state, action) {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { toggleMenuOpen } = menuSlice.actions;
export default menuSlice.reducer;
