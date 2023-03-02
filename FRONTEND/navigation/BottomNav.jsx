import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Perfil from '../screens/Perfil';
import Favoritos from '../screens/Favoritos';
import Chat from '../screens/Chat';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const TabsMascotas = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: '#827397',
        inactiveTintColor: '#B0B0B0',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: () => (
            <View><Text style={{fontSize: 20, color:'black'}}>🏠</Text></View>
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarIcon: () => (
            <View><Text style={{fontSize: 20, color:'black'}}>♥</Text></View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: () => (
            <View><Text style={{fontSize: 20, color:'black'}}>💬</Text></View>
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: () => (
            <View><Text style={{fontSize: 20, color:'black'}}>👤</Text></View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsMascotas;