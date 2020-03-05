// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

import HomePage from './screens/HomePage'
import ContactPage from './screens/ContactPage';
import ContactDetailsPage from './screens/ContactDetailsPage';
import ContactEditPage from './screens/ContactEditPage';

enableScreens();

const AppNavigator = createStackNavigator(
  {
    Home: HomePage,
    Contact: ContactPage,
    Details: ContactDetailsPage,
    Edit: ContactEditPage,
  },
  {
    initialRouteName: 'Home',
    
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    }
  }
);
export default createAppContainer(AppNavigator);