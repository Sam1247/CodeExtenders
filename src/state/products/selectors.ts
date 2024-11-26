import { RootState } from '../store';

export const selectProducts = (state: RootState) => state.products;
export const selectFavorites = (state: RootState) => state.favorites;
