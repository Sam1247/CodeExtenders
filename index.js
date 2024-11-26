/**
 * @format
 */
import 'react-native-gesture-handler'; // Add this at the top
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
