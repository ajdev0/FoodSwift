import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";

const preloadedState = {
  cart: JSON.parse(localStorage.getItem("cartData")) || { items: [] },
}; // Retrieve cart state from localStorage

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem("cartData", JSON.stringify(store.getState().cart)); // Save cart state to localStorage whenever it changes
});

export default store;
