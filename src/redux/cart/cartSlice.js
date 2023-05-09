import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    amount: 15,
    total: 0,
    isLoading: true,
  },
});
console.log(CartSlice);
export default CartSlice.reducer;
