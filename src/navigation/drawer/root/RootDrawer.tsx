import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
} from '@root/navigation/screens';
import { SettingTab } from '@root/navigation/tabs';
import { ReturnComponentType } from '@root/types';
import { navigationRef } from '@root/utils';

const Drawer = createDrawerNavigator();

export const RootDrawer = (): ReturnComponentType => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingTab} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
