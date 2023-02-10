import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  CarouselIntro  from './screens/CarouselIntro'
import Bienvenidos from './screens/Bienvenidos';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bienvenidos" component={Bienvenidos} options={{ headerShown: false }} />
        <Stack.Screen
          name="CarouselIntro"
          component={CarouselIntro}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;