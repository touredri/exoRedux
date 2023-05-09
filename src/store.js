import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './redux/cart/cartSlice';

const store = configureStore({
    reducer: {
        cart: CartReducer,
    },
})

export default store;