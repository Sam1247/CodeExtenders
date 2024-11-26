import React from 'react';
import { ProductContainer, ProductDetailsContainer, ProductImage, ProductLabel } from './ProductItem.styles';
import { IProductItemProps } from './product-item.props';

const ProductItem = ({onPress, imageUrl, title}: IProductItemProps) => {
  return (
    <ProductContainer
    onPress={() => {
        onPress();
    }}>
    <ProductImage
      source={{ uri: imageUrl }}
    />
    <ProductDetailsContainer>
      <ProductLabel numberOfLines={1}>{title}</ProductLabel>
    </ProductDetailsContainer>
  </ProductContainer>
);
};

export default ProductItem;
