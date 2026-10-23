import { createSlice } from "@reduxjs/toolkit";

//sab se pehly hum initialState ko is lye likhen ge kyon k humen pta chly ga k is me kon c value rakhni hai mtlb k wo khali ho gi ya kisi kisam ki value ho gi is me
const initialState = {
  cartItems: [],

};
const cartSlice = createSlice({
name : "cart",

initialState,
  reducers: {
  addToCart: (state, action) => {
    const product = action.payload
    const existingItems = state.cartItems.findIndex((item) => item.id === product.id )    
  
  if (existingItems >= 0) {
    state.cartItems[existingItems].quantity += 1;
  } else {
    state.cartItems.push({...product, quantity: 1})
  };
},
  IncreaseQuantity: (state, action) => {
          const id = action.payload
          const existingItems = state.cartItems.findIndex((item) => item.id === id)
          if(existingItems >= 0){
            state.cartItems[existingItems].quantity += 1;
          }
        }, 
    decreaseQuantity:(state, action) => {
          const id = action.payload;  
          const existingItems = state.cartItems.findIndex((item) => item.id === id)
          // quantity greater then 1
          if(existingItems >= 0 && state.cartItems[existingItems].quantity > 1){
            state.cartItems[existingItems].quantity -= 1;
        };
      },
  removeItem:(state, action) => {
   const id = action.payload;
    state.cartItems = state.cartItems.filter((item) => item.id !== id)
  },
  clearCart: (state) => {
      state.cartItems = [];
  }
  
  },
});
 export function cartTotal(state) {
  return state.cart.cartItems.reduce((total, item) => (
    total + item.price * item.quantity
  ), 0);
}
export const {addToCart, IncreaseQuantity, decreaseQuantity, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;