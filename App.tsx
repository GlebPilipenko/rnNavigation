import * as React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {RootDrawer} from './src/navigation/drawer';

export const App = () => {
  return (
    <Provider store={store}>
      <RootDrawer />
    </Provider>
  );
};
