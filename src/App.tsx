import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './state/store';
import ProductNavigator from './navigation/productNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorites } from './screens';


const Tab = createBottomTabNavigator();


const AppTabs = () => (
  <Tab.Navigator>
    <Tab.Screen options={{ headerShown: false }} name="Home" component={ProductNavigator} />
    <Tab.Screen name="Favorites" component={Favorites} />
  </Tab.Navigator>
);

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer >
        <AppTabs/>
      </NavigationContainer>
    </Provider>

  );
};


export default App;
