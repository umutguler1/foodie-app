import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          itemTotalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.itemTotalPrice =
          existingItem.itemTotalPrice + newItem.price;
      }
      state.totalPrice = state.totalPrice + newItem.price;
    },
    removeFromCart(state, action) {
      const idToBeRemoved = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === idToBeRemoved
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== idToBeRemoved);
      }
      existingItem.itemTotalPrice =
        existingItem.itemTotalPrice - existingItem.price;
      state.totalPrice = state.totalPrice - existingItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
