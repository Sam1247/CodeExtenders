import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-bottom: 12px;
  padding: 16px;
  `;

export const ProductImage = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  margin-bottom: 16px;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #1a73e8;
  margin-bottom: 8px;
`;

export const Rating = styled.Text`
  font-size: 16px;
  color: #555;
  margin-bottom: 16px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #222;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #555;
`;

export const Category = styled.Text`
  font-size: 16px;
  color: #777;
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const HeartIcon = styled.Text<{ isFavorite: boolean }>`
  font-size: 24px;
  color: ${(props) => (props.isFavorite ? 'red' : '#555')};
  margin-right: 8px;
`;

export const FavoriteText = styled.Text`
  font-size: 16px;
  color: #333;
`;
