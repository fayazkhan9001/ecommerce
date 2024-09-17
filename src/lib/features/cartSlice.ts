import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a cart item (same structure as the `item` in your component)
interface CartItem {
  id?: number;
  image: string;
  title: string;
  oldPrice?: number | string;
  newPrice: number | string;
  rating: number | string;
  discount?: string;
  condition?: string;
  color?: string;
}

// Define the initial state with a cart array
interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Define the payload as `PayloadAction<CartItem>` to accept an item object
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

// Export the actions
export const { addToCart, removeFromCart } = cartSlice.actions;
