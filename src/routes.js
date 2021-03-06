import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import Feed from './pages/Feed';
import News from './pages/News';
import logo from './assets/logo.png'
export default createAppContainer(
  createStackNavigator({
    Feed,
    News
  }, {
      initialRouteName: 'Feed',
      defaultNavigationOptions: {
        headerTintColor: '#000',
        headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
      },
      mode: 'modal',
    })
);