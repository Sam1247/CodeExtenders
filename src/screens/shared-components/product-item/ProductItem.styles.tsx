import styled from 'styled-components/native';

export const ProductContainer = styled.TouchableOpacity`
  width: 47%;
  height: 195px;
  border-radius: 12px;
  margin-bottom: 20px;
  background-color: white;
`;


export const ProductImage = styled.Image`
  width: 100%;
  height: 151px;
  border-radius: 12px 12px 0px 0px;
  padding-top: 12px;
  resize-mode: contain;
`;
export const ProductDetailsContainer = styled.View`
  margin-left: 12px;
  margin-top: 8px;
  align-items: flex-start;
`;



export const ProductLabel = styled.Text`
  color: 'black';
  font-size: 16px;
  font-weight: 400;
  padding: 6px;
`;
