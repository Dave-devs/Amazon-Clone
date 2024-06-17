import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: any;
  title: string;
  oldPrice: number;
  price: number;
  size: string;
  description: string;
  image: string;
  carouselImages: string[];
  percentOff: string;
  itemColor: string[];
  rating: string;
  ratingCount: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity = (itemPresent.quantity || 0) + 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemPresent && itemPresent.quantity > 1) {
        itemPresent.quantity -= 1;
      } else {
        state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export const selectAuth = (state: RootState) => state.carts;
export default CartSlice.reducer;