import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1, selected: true });
      }
    },
    removeItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity--;
        if (state.items[existingItemIndex].quantity === 0) {
          localStorage.setItem("cartData", []);
        }
      } else {
        state.items.filter((item) => item.id !== action.payload);
      }
    },
    clearItem: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCartItems = (state) => state.cart.items;
