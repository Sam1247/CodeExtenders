import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FavoritesState, Product } from './types';

const initialState: FavoritesState = {
    favorites: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<Product>) {
        const index = state.favorites.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
            // If the product is already in favorites, remove it
            state.favorites.splice(index, 1);
        } else {
            // Otherwise, add it to the favorites
            state.favorites.push(action.payload);
        }
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
