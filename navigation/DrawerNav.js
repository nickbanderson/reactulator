'use strict';
import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import CalcScreen from '../screens/CalcScreen';
import SettingsScreen from '../screens/SettingsScreen';


const RouteConfigs = {
  "HomeScreen": { screen: HomeScreen },
  "CalcScreen": { screen: CalcScreen },
  "SettingsScreen": {screen: SettingsScreen}
};

const DrawerNavigatorConfig = {
  drawerBackgroundColor: Colors.primary,
  initialRouteName: 'CalcScreen'
};

/*
createDrawerNavigator({
  Inbox: InboxStack
  Drafts: DraftsStack,
}, {
  initialRouteName: 'Inbox',
  contentOptions: {
    activeTintColor: '#e91e63',
  },
});
*/

//createAppContainer(  )

export default createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);