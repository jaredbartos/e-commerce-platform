import { configureStore } from "@reduxjs/toolkit";
import productsAndCartReducer from './slices/productsAndCartSlice';

export default configureStore({
  reducer: {
    productsAndCart: productsAndCartReducer
  }
});