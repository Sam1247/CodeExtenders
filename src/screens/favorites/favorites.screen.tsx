
import React from 'react';
import FavoritesView from './favorites.view';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../state';

const FavoritesScreen = () => {
    const favorites = useSelector(selectFavorites).favorites;

  return (
    <FavoritesView items={favorites}/>
  );
};

export default FavoritesScreen;
