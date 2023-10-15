import { createSlice } from "@reduxjs/toolkit";

const transferSlide = createSlice({
  name: "transfer",
  initialState: {
    selectedAnswer: [],
  },
  reducers: {
    setSelectedAnswer(state, action) {
      state.selectedAnswer = action.payload;
    },
  },
});

export const { setSelectedAnswer } = transferSlide.actions;
export default transferSlide.reducer;
