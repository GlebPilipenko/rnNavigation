import * as React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './store';
import {RootDrawer} from './navigation/drawer';

export default function App() {
  return (
    <Provider store={store}>
      <RootDrawer />
    </Provider>
  );
}
