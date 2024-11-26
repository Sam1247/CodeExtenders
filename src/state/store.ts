import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productSlice';
import favoritesReducer from './products/favoriteSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
