import * as React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {RootDrawer} from './src/navigation/drawer';
import {store} from './src/store';

export const App = () => {
  return (
    <Provider store={store}>
      <RootDrawer />
    </Provider>
  );
};
