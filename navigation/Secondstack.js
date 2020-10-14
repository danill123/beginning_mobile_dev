import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();

function Secondstack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: "#555555",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }} 
    >
      <Stack.Screen name="International" component={FavoritesScreen} />
      <Stack.Screen name="list covid global" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

export default Secondstack;