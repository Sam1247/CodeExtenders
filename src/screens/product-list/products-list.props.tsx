import { StackNavigationProp } from '@react-navigation/stack';
import { Product } from '../../state';
import { AppRoutes } from '../../navigation/routes';
import { RootStackParamList } from '../../navigation/productNavigator';

export interface IProductsListViewProps {
    items: Product[]
    loading: boolean
    error: string | null
    onProductPressed: Function
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, AppRoutes.ProductList>;

export type ProductsListScreenProps = {
  navigation: HomeScreenNavigationProp;
};
