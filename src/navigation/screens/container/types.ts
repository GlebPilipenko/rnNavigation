import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamListType} from '../../../types';
import {StackKey} from '../../../enum';

export type ScreenContainerType = NativeStackNavigationProp<
  RootStackParamListType,
  StackKey.Home
>;
