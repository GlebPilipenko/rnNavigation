import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NotificationSettingsScreen,
  ProfileSettingsScreen,
  SettingScreen,
} from '@root//navigation/screens';
import { StackKey } from '@root/enum';
import { ReturnComponentType } from '@root/types';

const Tab = createBottomTabNavigator();

export const SettingTab = (): ReturnComponentType => {
  return (
    <SettingScreen>
      <Tab.Navigator
        initialRouteName={StackKey.NotificationSettings}
        screenOptions={{ headerShown: true }}>
        <Tab.Screen
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
          name={StackKey.ProfileSettings}
          component={ProfileSettingsScreen}
        />
        <Tab.Screen
          name={StackKey.NotificationSettings}
          component={NotificationSettingsScreen}
        />
      </Tab.Navigator>
    </SettingScreen>
  );
};
