import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Perfil from '../screens/Perfil';
import Favoritos from '../screens/Favoritos';
import Chat from '../screens/Chat';


const Tab = createBottomTabNavigator();

const TabsMascotas = () => {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false }}
    >
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Favoritos" component={Favoritos} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default TabsMascotas;