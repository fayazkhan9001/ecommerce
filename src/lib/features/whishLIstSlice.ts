import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the IItem interface for whishList items
interface IItem {
  title: string;
  quantity: number;
}

// Define the initial state structure
interface WhishListState {
  whishList: IItem[];
}

// Initialize the state with the correct type
const initialState: WhishListState = {
  whishList: [],
};

// Create the slice
export const whishListSlice = createSlice({
  name: "whishList",
  initialState,
  reducers: {
    // Action for adding an item to the wish list
    addToList: (state, action: PayloadAction<IItem>) => {
      const itemIndex = state.whishList.findIndex(
        (item) => item.title === action.payload.title,
      );

      if (itemIndex !== -1) {
        // If item already exists, increment quantity
        state.whishList[itemIndex].quantity += 1;
      } else {
        // Add the new item with quantity 1
        state.whishList.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    // Action for removing an item from the wish list
    removeFromList: (state, action: PayloadAction<string>) => {
      // Filter out the item by title
      state.whishList = state.whishList.filter(
        (item) => item.title !== action.payload,
      );
    },
  },
});

// Export the actions and reducer
export const { addToList, removeFromList } = whishListSlice.actions;
export default whishListSlice.reducer;
