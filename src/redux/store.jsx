import { configureStore } from "@reduxjs/toolkit"; // this is the new way to create store in redux toolkit, it is more
// efficient and less code than the old way of creating store.

import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice, // store ke ander store ho gya. cartSlice reducer cart reducer ke ander
  },
}); // reducer is just likefeature. according to req..., will make diff diff reducers.
