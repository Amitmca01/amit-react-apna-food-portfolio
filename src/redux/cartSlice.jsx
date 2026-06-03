import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // AddItem ak reducer hai.
    AddItem: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { AddItem } = cartSlice.actions; // AddItem ak reducer hai.
export default cartSlice.reducer;


