import { RouteProp } from '@react-navigation/native';
import { AppRoutes } from '../../navigation/routes';
import { Product } from '../../state';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/productNavigator';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, AppRoutes.ProductDetails>;

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, AppRoutes.ProductDetails>;

export interface ProductDetailsScreenProps {
    route: DetailsScreenRouteProp;
    navigation: DetailsScreenNavigationProp;
}

export interface ProductDetailsViewProps {
    product: Product
    isFavorite: boolean
    handleFavoriteToggle: Function
}
