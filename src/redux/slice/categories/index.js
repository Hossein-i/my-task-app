import { createSlice } from "@reduxjs/toolkit";
import { categories, add, remove, put } from "./asyncThunk";

const initialState = {
  categories: [],
  isLoading: true,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [categories.pending]: (state) => {
      state.isLoading = true;
    },
    [categories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    [categories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [add.fulfilled]: (state, action) => {
      state.categories.push(action.payload);
    },
    [remove.fulfilled]: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
    [put.fulfilled]: (state, action) => {
      const categoryIndex = state.categories.findIndex(
        (category) => category.id === action.payload.id
      );
      state.categories[categoryIndex] = action.payload;
    },
  },
});

export default categoriesSlice.reducer;
