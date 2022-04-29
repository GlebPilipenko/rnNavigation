import * as React from 'react';
import {ReactNode, useEffect, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Alert, Button, Text, View} from 'react-native';
import {ScreenContainerType} from './types';
import {StackKey} from '../../../enum';
import {NavigationStackParamListType} from '../../../types';
import {styles} from './styles';

export const ScreenContainer = ({children}: {children: ReactNode}) => {
  const [isGoHomeCalled, setIsGoHomeCalled] = useState(false);

  const navigation = useNavigation<ScreenContainerType>();
  const route = useRoute<RouteProp<NavigationStackParamListType>>();

  const onGoHomePress = () => navigation.navigate(StackKey.Home);

  const onGoHomeWithComponentNamePress = () => {
    setIsGoHomeCalled(true);
    navigation.navigate(StackKey.Home);
  };

  useEffect(() => {
    if (isGoHomeCalled && route.name === StackKey.NotificationSettings) {
      Alert.alert(`Go from ${route.name}`);
    }
  }, [isGoHomeCalled, route.name]);

  return (
    <View style={styles.container}>
      {children !== StackKey.Home && (
        <Button title="Go home..." onPress={onGoHomePress} />
      )}
      {route.name === StackKey.NotificationSettings && (
        <Button
          title="Go home with component name..."
          onPress={onGoHomeWithComponentNamePress}
        />
      )}

      <Text>{children}</Text>
    </View>
  );
};
