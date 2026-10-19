import createSlice from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],

};
const cartSlice = createSlice({
name : "cart",

initialState,
  reducers: {
  addToCart: (state, action) => {
    const product = action.payload;
    const existingItems =  state.cartItems.findIndex((items) => items.id === product.id)

      if (existingItems >= 0) {


        state.cartItems[existingItems].quantity += 1;
      } else {
        state.cartItems.push({...product, quantity : 1 })
      }     
      const IncreaseItem = () = {
          
      }
  }
  } 
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducers;