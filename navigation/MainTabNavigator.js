// DEFUNCT

'use strict';
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CalcScreen from '../screens/CalcScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});



const commonNavOptions = {
  headerTitleStyle: {
    color: Colors.secondary
  },
  headerStyle: {
    backgroundColor: Colors.primary
  },
  //headerTintColor: {},
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  ...commonNavOptions,
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} 
      name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'} 
    />
  ),
};

HomeStack.path = '';

const CalcStack = createStackNavigator(
  {
    Calc: CalcScreen,
  },
  config
);

CalcStack.navigationOptions = {
  ...commonNavOptions,
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  tabBarLabel: 'Calc',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} />
  ),
};

CalcStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  ...commonNavOptions,
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CalcStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
