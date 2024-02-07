import { configureStore } from "@reduxjs/toolkit";
import productsAndCartReducer from './slices/productsAndCartSlice';
import categoriesReducer from './slices/categoriesSlice';

export default configureStore({
  reducer: {
    productsAndCart: productsAndCartReducer,
    categories: categoriesReducer
  }
});