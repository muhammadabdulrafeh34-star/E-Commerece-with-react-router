import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
};

const whishListSlice = createSlice({
  name: "whishList",

  initialState,
  reducers: {
    addToWhishList: (state, action) => {
      const product = action.payload;
      const existingIndex = state.wishList.findIndex((item) => item.id === product.id);

      if (existingIndex !== -1) {
        state.wishList = state.wishList.filter((item) => item.id !== product.id);
      } else {
        state.wishList.push(product);
      }
    },
  },
});

export const { addToWhishList } = whishListSlice.actions;
export default whishListSlice.reducer;