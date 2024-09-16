import { createSlice } from "@reduxjs/toolkit";

export const whishListSlice = createSlice({
  name: "whishList",
  initialState: {
    whishList: [],
  },
  reducers: {
    addToList: (state, action) => {
      const itemIndex = state.whishList.findIndex(
        (item) => item.title === action.payload.title,
      );

      if (itemIndex !== -1) {
        state.whishList[itemIndex].quantity += 1;
      } else {
        state.whishList.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeFromList: (state, action) => {
      const filteredArr = state.whishList.filter(
        (item) => item?.title !== action.payload,
      );
      state.whishList = filteredArr;
    },
  },
});

export const { addToList, removeFromList } = whishListSlice.actions;
