import * as React from 'react';
import {ProfileName} from '../../screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {StackKey} from '../../../enum';
import {Alert, Button} from 'react-native';

const Stack = createNativeStackNavigator();

export const ProfileScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackKey.ProfileName}
        component={ProfileName}
        options={{
          headerRight: () => (
            <Button
              onPress={() => Alert.alert('This is a button!')}
              title="Click Me!"
              color="red"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
