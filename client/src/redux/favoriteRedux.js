import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
    },
    
    removeFromFavorite(state, action) {
      state.products.map((product) => {
        if (product._id === action.payload._id) {
          const nextProducts = state.products.filter(
            (item) => item._id !== product._id
          );

          state.products = nextProducts;
          state.quantity -= 1;

          
        }
        localStorage.setItem("nextProducts", JSON.stringify(state.nextProducts));
        return state;
      });
    },

  },
});

export const { addProduct,addToFav,removeFromFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;