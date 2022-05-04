import * as React from 'react';

import { ProfileName } from '@root//navigation/screens';
import { StackKey } from '@root/enum';
import { ReturnComponentType } from '@root/types';
import { Alert, Button } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

export const ProfileScreen = (): ReturnComponentType => {
  const stackScreenOptions = {
    headerRight: () => (
      <Button
        onPress={() => Alert.alert('This is a button!')}
        title="Click Me!"
        color="red"
      />
    ),
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackKey.ProfileName}
        component={ProfileName}
        options={stackScreenOptions}
      />
    </Stack.Navigator>
  );
};
