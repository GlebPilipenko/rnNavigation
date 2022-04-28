import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {HomeScreen, NotificationScreen, ProfileScreen} from '../../screens';
import {SettingTab} from '../../tabs';
import {navigationRef} from '../../../utils';

const Drawer = createDrawerNavigator();

export const RootDrawer = () => {
  return (
    <NavigationContainer ref={navigationRef as any}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingTab} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
