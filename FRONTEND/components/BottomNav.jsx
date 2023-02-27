import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';


const Tab = createBottomTabNavigator();

function TabsMascotas() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Favoritos" component={Dashboard} />
        <Tab.Screen name="Chat" component={Dashboard} />
        <Tab.Screen name="Perfil" component={Dashboard} />
    </Tab.Navigator>
  );
}

export default function TabsMascotasBar() {
  return (
    <NavigationContainer>
      <TabsMascotas />
    </NavigationContainer>
  );
}