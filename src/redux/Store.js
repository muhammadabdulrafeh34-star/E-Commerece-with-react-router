import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import whishListReducer  from './wishListSlice';

const Store = configureStore({
  reducer:{
    cart : cartReducer, 
    wishList: whishListReducer    
  },
});

export default Store;