import { NavigationContainerRefWithCurrent } from '@react-navigation/core/src/types';
import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamListType } from '@root/types';

export const navigationRef =
  createNavigationContainerRef<
    NavigationContainerRefWithCurrent<RootStackParamListType>
  >();

export const navigate = (name: string): void => {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name);
  }
};
