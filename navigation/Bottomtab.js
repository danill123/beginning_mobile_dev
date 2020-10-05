import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import Mainstack from './Mainstack';
import Secondstack from './Secondstack';

const Tab = createBottomTabNavigator();

function Bottomtab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }} 
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Mainstack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <AntDesign name="bars" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Secondstack} 
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            <AntDesign name="link" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Bottomtab;
