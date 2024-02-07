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
    updateProducts: (state, action) => {
      return {
        ...state,
        products: action.payload.products
      };
    },
    addToCart: (state, action) => {
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.payload.product]
      };
    },
    addMultipleToCart: (state, action) => {
      return {
        ...state,
        cart: [...state.cart, ...action.payload.products]
      };
    },
    updateCartQuantity: (state, action) => {
      const updatedCart = state.cart.map((product) => {
        if (action.payload._id === product._id) {
          return {
            ...product,
            purchaseQuantity: action.payload.purchaseQuantity
          };
        }
        return product;
      });
      
      return {
        ...state,
        cartOpen: true,
        cart: updatedCart
      };
    },
    removeFromCart: (state, action) => {
      let newState = state.cart.filter((product) => {
        return product._id !== action.payload._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };
    },
    clearCart: state => {
      return {
        ...state,
        cartOpen: false,
        cart: []
      };
    },
    toggleCart: state => {
      return {
        ...state,
        cartOpen: !state.cartOpen
      };
    }
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