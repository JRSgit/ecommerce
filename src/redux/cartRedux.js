import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    product: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.product.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeAllProduct: (state) => {
      state.product = []
      state.quantity = 0
      state.total = 0
    }
  }
})

export const { addProduct, removeAllProduct } = cartSlice.actions;
export default cartSlice.reducer;
