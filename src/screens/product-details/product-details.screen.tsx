import React from 'react'
import ProductDetailsView from './product-details.view'
import { ProductDetailsScreenProps } from './product-details.props'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavorites } from '../../state'
import { toggleFavorite } from '../../state/products/favoriteSlice'

const ProductDetailsScreen = ({ route }: ProductDetailsScreenProps) => {

  const product = route.params.product
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.favorites.some((fav) => fav.id === product.id);

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(product));
  };


  return (
      <ProductDetailsView product={product} isFavorite={isFavorite} handleFavoriteToggle={handleFavoriteToggle}/>
  )
}

export default ProductDetailsScreen