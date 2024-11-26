import { ScrollView } from 'react-native'
import React from 'react'
import { ProductDetailsViewProps } from './product-details.props'
import {  Category, Container, Description, FavoriteButton, FavoriteText, HeartIcon, Price, ProductImage, Rating, SectionTitle, Title } from './product-details.styles';

const ProductDetailsView = ({ product, isFavorite, handleFavoriteToggle }: ProductDetailsViewProps) => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductImage source={{ uri: product.image }} />

        <Title>{product.title}</Title>

        <Price>${product.price.toFixed(2)}</Price>

        <Rating>
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </Rating>

        {/* Favorite Button */}
        <FavoriteButton onPress={() => handleFavoriteToggle()}>
          <HeartIcon isFavorite={isFavorite}>❤️</HeartIcon>
          <FavoriteText>{isFavorite ? 'Unfavorite' : 'Favorite'}</FavoriteText>
        </FavoriteButton>

        <SectionTitle>Description</SectionTitle>
        <Description>{product.description}</Description>

        <SectionTitle>Category</SectionTitle>
        <Category>{product.category}</Category>

      </ScrollView>
    </Container>

  );
}

export default ProductDetailsView