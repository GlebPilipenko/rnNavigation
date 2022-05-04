import * as React from 'react';

import 'react-native-gesture-handler';

import { RootDrawer } from '@root/navigation/drawer';
import { store } from '@root/store';
import { ReturnComponentType } from '@root/types';
import { Provider } from 'react-redux';

export const App = (): ReturnComponentType => {
  return (
    <Provider store={store}>
      <RootDrawer />
    </Provider>
  );
};
