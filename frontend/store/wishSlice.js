import {createSlice} from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishItems: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const item = state.wishItems.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.wishItems.push({...action.payload, quantity: 1});
      }
    },

    updateWishlist: (state, action) => {
      state.wishItems = state.wishItems.map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.attributes.price = p.oneQuantityPrice * action.payload.val;
          }
          return {...p, [action.payload.key]: action.payload.val};
        }
      });
    },
    removeFromWishlist: (state, action) => {
      state.wishItems = state.wishItems.filter(
        (p) => p.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToWishlist, updateWishlist, removeFromWishlist} =
  wishSlice.actions;

export default wishSlice.reducer;
