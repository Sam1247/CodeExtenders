import {Text, ListRenderItem, ActivityIndicator} from 'react-native';
import React from 'react';
import {IProductsListViewProps} from './products-list.props';
import {Product} from '../../state';
import {
  Centered,
  EmptyProductLabel,
  EmptyViewContainer,
  ErrorLabel,
  LoadingContainer,
  ProductsList,
} from './products-list.styles';
import {ProductItem} from '../shared-components';

const ProductsListView = ({
  items,
  loading,
  error,
  onProductPressed,
}: IProductsListViewProps) => {
  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size={'large'} color={'blue'} />
        <Text style={{padding: 12}}>Loading...</Text>
      </LoadingContainer>
    );
  }

  if (error) {
    return <ErrorLabel>Error: {error}</ErrorLabel>;
  }

  const renderItem: ListRenderItem<Product> = ({item, index}) => {
    return (
      <ProductItem
        onPress={() => {
          onProductPressed(index);
        }}
        imageUrl={item.image}
        title={item.title}
      />
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
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ListEmptyComponent={renderEmptyView()}
        numColumns={2}
      />
    </Centered>
  );
};

export default ProductsListView;
