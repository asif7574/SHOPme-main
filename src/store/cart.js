import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const firstItem = state.cartList.find(
        (item) => item.id === action.payload.id
      );

      if (firstItem) {
        firstItem.quantity += 1;
        state.cartCount += 1;
      } else {
        state.cartList.push({
          ...action.payload,
          quantity: 1,
        });
        state.cartCount += 1;
      }
    },

    increment: (state, action) => {
      state.cartCount += 1;
      const selectedItem = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      selectedItem.quantity += 1;
    },

    decrement: (state, action) => {
      state.cartCount -= 1;
      const selectedItem = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      selectedItem.quantity -= 1;
    },

    deleteItem: (state, action) => {
      const minusCount = action.payload.quantity;
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartCount = state.cartCount - minusCount;
    },

    clearCart: (state, action) => {
      state.cartList = [];
      state.cartCount = 0;
    },
  },
});

export const { addToCart, increment, decrement, deleteItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
