import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cartSlice";
import { whishListSlice } from "./features/whishLIstSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice.reducer,
      whishList: whishListSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type Rootstate = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
