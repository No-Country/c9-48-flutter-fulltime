import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Perfil from '../screens/Perfil';


const Tab = createBottomTabNavigator();

const TabsMascotas = () => {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false }}
    >
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Favoritos" component={Dashboard} />
        <Tab.Screen name="Chat" component={Perfil} />
        <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default TabsMascotas;