import styled from 'styled-components/native';


export const ProductsList = styled.FlatList`
  width: 90%;
  height: 100%;
  padding-top: 30px;
`;


export const ProductDetailsContainer = styled.View`
  margin-left: 12px;
  margin-top: 8px;
  align-items: flex-start;
`;
export const EmptyViewContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ErrorLabel = styled.Text`
  color: 'red';
  font-size: 16px;
  font-weight: 500;
  padding: 6px;
`;

export const EmptyProductLabel = styled.Text`
  color: 'black';
  font-size: 16px;
  font-weight: 500;
  padding: 6px;
`;

export const ProductsLabel = styled.Text`
  color: 'brown';
  font-size: 13px;
  font-weight: 300;
`;

export const Centered = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

`;
