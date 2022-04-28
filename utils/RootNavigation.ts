import {createNavigationContainerRef} from '@react-navigation/native';
import {NavigationContainerRefWithCurrent} from '@react-navigation/core/src/types';
import {RootStackParamListType} from '../types';

export const navigationRef =
  createNavigationContainerRef<
    NavigationContainerRefWithCurrent<RootStackParamListType>
  >();

const DELAY = 2000;

export const navigate = (name: string): any => {
  if (navigationRef.isReady()) {
    setTimeout(() => {
      // @ts-ignore
      navigationRef.navigate(name);
    }, DELAY);
  }
};
