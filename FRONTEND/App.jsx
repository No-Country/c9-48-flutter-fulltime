import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  CarouselIntro  from './screens/CarouselIntro'
import Bienvenidos from './screens/Bienvenidos';
import RegistroOpcion from './screens/RegistroOpcion';
import RegistroAnfitrion from './screens/RegistroAnfitrion';
import RegistroCuidador from './screens/RegistroCuidador'
import RegistroAnfitrionVerificacion from './screens/RegistroAnfitrionVerificacion'
import RegistroAnfitrionDetalle from './screens/RegistroAnfitrionDetalle';
import RegistroAnfitrionCasa from './screens/RegistroAnfitrionCasa';
import RegistroAnfitrionMascota from './screens/RegistroAnfitrionMascota'
import RegistroCuidadorVerificacion from './screens/RegistroCuidadorVerificacion';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CarouselIntro" component={CarouselIntro} />
        <Stack.Screen name="Bienvenidos" component={Bienvenidos}  />
        <Stack.Screen name="RegistroOpcion" component={RegistroOpcion} />
        <Stack.Screen name='RegistroAnfitrion' component={RegistroAnfitrion}/>
        <Stack.Screen name='RegistroCuidador' component={RegistroCuidador} />
        <Stack.Screen name='RegistroAnfitrionVerificacion' component={RegistroAnfitrionVerificacion} />
        <Stack.Screen name='RegistroAnfitrionDetalle' component={RegistroAnfitrionDetalle} />
        <Stack.Screen name='RegistroAnfitrionCasa' component={RegistroAnfitrionCasa}/>
        <Stack.Screen name='RegistroAnfitrionMascota' component={RegistroAnfitrionMascota} />
        <Stack.Screen name='RegistroCuidadorVerificacion' component={RegistroCuidadorVerificacion} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;