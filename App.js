import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Bottomtab from './navigation/Bottomtab'

// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens';
enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <Bottomtab />
    </NavigationContainer>
  );
}