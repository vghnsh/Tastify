import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import Saved from './src/screens/Saved';
import Profile from './src/screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
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

            // borderRadius: 10,
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
          component={Home}
          options={{headerShown: false}} // Hide the header for the Home screen
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          options={{headerShown: false}} // Hide the header for the Saved screen
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}} // Hide the header for the Profile screen
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
