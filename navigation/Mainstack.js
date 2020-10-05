import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FiltersScreen from "../screens/FiltersScreen";
import CategoryMealScreen from '../screens/CategoryMealsScreen';

const Stack = createStackNavigator();

function Mainstack() {
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
      <Stack.Screen name="Home" component={CategoryMealScreen} />
      <Stack.Screen name="Notifications" component={FiltersScreen} />
    </Stack.Navigator>
  );
}

export default Mainstack;