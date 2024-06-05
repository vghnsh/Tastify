/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

// Register background handler
messaging().getInitialNotification(async remoteMessage => {
  console.log('Message handled in the background kill state!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
