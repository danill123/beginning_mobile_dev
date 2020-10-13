import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Bottomtab from './navigation/Bottomtab';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from "./store/reducer/reducers";

// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens';
enableScreens();

const store = createStore(reducers, applyMiddleware(thunk));
export default function App() {
  return (
      <NavigationContainer>
        <Provider store={store}>
          <Bottomtab />
        </Provider>
      </NavigationContainer>
  );
}
