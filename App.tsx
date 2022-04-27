import * as React from 'react';
import {ReactNode} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

enum StackKey {
  Home = 'Home',
  Profile = 'Profile',
  Settings = 'Settings',
  Notifications = 'Notifications',
  ProfileSettings = 'ProfileSettings',
  NotificationsSettings = 'NotificationsSettings',
}

type RootStackParamListType = {
  [StackKey.Home]: undefined;
  [StackKey.Profile]: undefined;
  [StackKey.Settings]: undefined;
  [StackKey.Notifications]: undefined;
};

type ScreenContainerType = NativeStackNavigationProp<
  RootStackParamListType,
  StackKey.Home
>;

const ScreenContainer = ({children}: {children: ReactNode}) => {
  const navigation = useNavigation<ScreenContainerType>();

  const onGoHomePress = () => navigation.navigate(StackKey.Home);

  return (
    <View style={styles.container}>
      {children !== StackKey.Home && (
        <Button title="Go home..." onPress={onGoHomePress} />
      )}

      <Text>{children}</Text>
    </View>
  );
};

const HomeScreen = () => <ScreenContainer>Home</ScreenContainer>;

const ProfileScreen = () => <ScreenContainer>Profile</ScreenContainer>;

const ProfileSettingsScreen = () => (
  <ScreenContainer>Profile Settings</ScreenContainer>
);

const NotificationSettingsScreen = () => (
  <ScreenContainer>Notifications Settings</ScreenContainer>
);

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  console.log(1);

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={StackKey.Home} component={ProfileSettingsScreen} />
      <Tab.Screen
        name={StackKey.Profile}
        component={NotificationSettingsScreen}
      />
    </Tab.Navigator>
  );
};

const NotificationsScreen = () => (
  <ScreenContainer>Notification</ScreenContainer>
);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
