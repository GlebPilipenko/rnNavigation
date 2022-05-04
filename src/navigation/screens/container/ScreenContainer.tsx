import { styles } from './styles';
import { ScreenContainerType } from './types';

import * as React from 'react';
import { FC, ReactNode, useEffect, useState } from 'react';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackKey } from '@root/enum';
import { NavigationStackParamListType } from '@root/types';
import { Alert, Button, Text, View } from 'react-native';

export const ScreenContainer: FC<{ children: ReactNode }> = ({ children }) => {
  const [isGoHomeCalled, setIsGoHomeCalled] = useState<boolean>(false);

  const navigation = useNavigation<ScreenContainerType>();
  const route = useRoute<RouteProp<NavigationStackParamListType>>();

  const onGoHomePress = (): void => navigation.navigate(StackKey.Home);

  const onGoHomeWithComponentNamePress = (): void => {
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
