import { AppDispatch } from '../store';
import axios from 'axios';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from './productSlice';
import { Product } from './types';

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchProductsStart());
    const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
    dispatch(fetchProductsSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchProductsFailure(error.message));
  }
};
