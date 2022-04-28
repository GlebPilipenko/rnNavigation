import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {
  NotificationSettingsScreen,
  ProfileSettingsScreen,
  SettingScreen,
} from '../../screens';
import {StackKey} from '../../../enum';

const Tab = createBottomTabNavigator();

export const SettingTab = () => {
  return (
    <SettingScreen>
      <Tab.Navigator
        initialRouteName={StackKey.NotificationSettings}
        screenOptions={{headerShown: true}}>
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
