import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  currentCategory: ''
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateCategories: (state, action) => 
      state = { ...state, categories: [action.payload.categories] },
    updateCurrentCategory: (state, action) =>
      state = { ...state, currentCategory: action.payload.currentCategory }
  }
});

export const { updateCategories, updateCurrentCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;