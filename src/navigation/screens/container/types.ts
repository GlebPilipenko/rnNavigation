import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackKey } from '@root/enum';
import { RootStackParamListType } from '@root/types';

export type ScreenContainerType = NativeStackNavigationProp<
  RootStackParamListType,
  StackKey.Home
>;
