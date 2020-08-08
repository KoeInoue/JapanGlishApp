import { Navigation } from "@react-navigation/native";
import { AppRegistry } from 'react-native';
import App from "./App";
import { name as appName } from './app.json';

console.log('getAppKeys()=', AppRegistry.getAppKeys());
AppRegistry.registerComponent(appName, () => App);
// Navigation.registerComponent('com.japanglishApp.HomeScreen', () => App);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'com.japanglishApp.HomeScreen'
//             }
//           }
//         ]
//       }
//     }
//   });
// });