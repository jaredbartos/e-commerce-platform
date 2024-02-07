import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  currentCategory: ''
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateCategories: (state, action) => {
      return {
        ...state,
        categories: action.payload.categories
      };
    },
    updateCurrentCategory: (state, action) => {
      return {
        ...state,
        currentCategory: action.payload.currentCategory
      };
    }
  }
});

export const selectCategories = state => state.categories.categories;
export const selectCurrentCategory = state => state.categories.currentCategory;

export const { updateCategories, updateCurrentCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;