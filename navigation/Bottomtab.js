import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

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
          tabBarLabel: 'Beranda',
          tabBarIcon: () => (
            <AntDesign name="home" size={24} color="#555555" />
          ),
        }}
      />
      <Tab.Screen 
        name="International" 
        component={Secondstack} 
        options={{
          tabBarLabel: 'Internasional',
          tabBarIcon: () => (
            <Entypo name="globe" size={24} color="#555555" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Bottomtab;
