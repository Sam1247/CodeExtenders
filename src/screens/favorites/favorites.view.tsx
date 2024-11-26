import {  ListRenderItem } from 'react-native';
import React from 'react';
import { Product } from '../../state';
import { Centered, EmptyProductLabel, EmptyViewContainer, ProductsList } from './favorites.styles';
import { IFavoritesViewProps } from './favorites.props';
import { ProductItem } from '../shared-components';

const FavoritesView = ({items}: IFavoritesViewProps) => {

    const renderItem: ListRenderItem<Product> = ({ item }) => {
        return (
            <ProductItem onPress={() => {
              }} imageUrl={item.image} title={item.title}/>
        );
      };

    const renderEmptyView = () => {
        return (
          <EmptyViewContainer>
            <EmptyProductLabel>No products to show.</EmptyProductLabel>
          </EmptyViewContainer>
        );
      };

    return (
        <Centered>
          <ProductsList
            data={items}
            keyExtractor={(item: Product) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            ListEmptyComponent={renderEmptyView()}
            numColumns={2}
            />
        </Centered>
      );
    };

export default FavoritesView;
