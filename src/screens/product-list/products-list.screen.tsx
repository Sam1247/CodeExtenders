import React, { useCallback, useEffect } from 'react'
import ProductsListView from './products-list.view'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts } from '../../state';
import { AppRoutes } from '../../navigation/routes';
import { ProductsListScreenProps } from './products-list.props';

const ProductsListScreen = ({ navigation }:ProductsListScreenProps) => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(selectProducts);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onProductPressed = useCallback(
    (index: number) => {
      navigation.navigate(AppRoutes.ProductDetails, { product: items[index]} )
    },
    [navigation, items],
  )
  
  return (
      <ProductsListView items={items} loading={loading} error={error} onProductPressed={onProductPressed}/>
  )
}

export default ProductsListScreen