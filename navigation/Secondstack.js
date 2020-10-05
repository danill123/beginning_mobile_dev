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
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }} 
    >
      <Stack.Screen name="Favorite" component={FavoritesScreen} />
      <Stack.Screen name="Settings" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

export default Secondstack;