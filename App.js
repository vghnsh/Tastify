import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Saved from './src/screens/Saved';
import Profile from './src/screens/Profile';
import Details from './src/screens/Details'; // Import your details screen
import Ionicons from 'react-native-vector-icons/Ionicons';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Saved') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          height: 60,
        },
        tabBarItemStyle: {
          backgroundColor: 'white',
          marginBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 14, // Increase the font size of the text
          fontWeight: 'bold',
        },
        tabBarIconStyle: {
          height: 30, // Increase the height of the icon
          width: 30, // Increase the width of the icon
        },
      })}
      tabBarOptions={{
        activeTintColor: '#4F6C4E',
        inactiveTintColor: '#AFB1C0',
        style: {
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={() => <Home navigation={navigation} />}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Saved"
        component={() => <Saved navigation={navigation} />}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={() => <Profile navigation={navigation} />}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

function App() {
  const getToken = async () => {
    try {
      console.log('token', 'getting token');
      const value = await messaging()?.getToken();
      console.log('token', value);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Filter"
          component={Details}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
