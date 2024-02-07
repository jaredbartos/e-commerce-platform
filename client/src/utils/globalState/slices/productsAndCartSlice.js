import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: [],
  cartOpen: false
};

const productsAndCartSlice = createSlice({
  name: 'productsAndCart',
  initialState,
  reducers: {
    updateProducts: (state, action) => 
      state = { ...state, products: action.payload.products },
    addToCart: (state, action) =>
      state = {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.payload.product]
      },
    addMultipleToCart: (state, action) =>
      state = {
        ...state,
        cart: [...state.cart, ...action.payload.products]
      },
    updateCartQuantity: (state, action) =>
      state = {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action.payload._id === product._id) {
            product.purchaseQuantity = action.payload.purchaseQuantity;
          }
          return product;
        })
    },
    removeFromCart: (state, action) => {
      let newState = state.cart.filter((product) => {
        return product._id !== action.payload._id;
      });

      state = {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };
    },
    clearCart: state => state = { ...state, cartOpen: false, cart: [] },
    toggleCart: state => state = { ...state, cartOpen: !state.cartOpen }
  }
});

export const selectCart = state => state.productsAndCart.cart;
export const selectCartOpen = state => state.productsAndCart.cartOpen;
export const selectProducts = state => state.productsAndCart.products;

export const {
  updateProducts,
  addToCart,
  addMultipleToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  toggleCart
} = productsAndCartSlice.actions;

export default productsAndCartSlice.reducer;