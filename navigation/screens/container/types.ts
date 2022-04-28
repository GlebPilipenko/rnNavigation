import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamListType} from 'src/types';
import {StackKey} from 'src/enum';

export type ScreenContainerType = NativeStackNavigationProp<
  RootStackParamListType,
  StackKey.Home
>;
