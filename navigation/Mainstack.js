import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FiltersScreen from "../screens/FiltersScreen";
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import Dev_contact from "../screens/Dev_contact";

const Stack = createStackNavigator();

function Mainstack() {
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
      <Stack.Screen name="Home" component={CategoryMealScreen} />
      <Stack.Screen name="Detail Covid" component={FiltersScreen} />
      <Stack.Screen name="Developer profile" component={Dev_contact} />
    </Stack.Navigator>
  );
}

export default Mainstack;