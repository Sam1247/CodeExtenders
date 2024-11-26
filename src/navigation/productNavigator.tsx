import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from './routes';
import { Product } from '../state';
import { ProductDetails, ProductList } from '../screens';
import React from 'react';

export type RootStackParamList = {
    [AppRoutes.ProductList]: undefined;
    [AppRoutes.ProductDetails]: { product: Product };
  };


const ProductNavigator = () => {
    const ProductStack = createStackNavigator<RootStackParamList>();
    return (
        <ProductStack.Navigator>
            <ProductStack.Group>
            <ProductStack.Screen name={AppRoutes.ProductList} component={ProductList} />
            <ProductStack.Screen name={AppRoutes.ProductDetails}  component={ProductDetails} />
            </ProductStack.Group>
        </ProductStack.Navigator>
    )
}

export default ProductNavigator