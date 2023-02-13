import * as React from 'react'
import { Button, Text, TextInput, View, useColorScheme, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const RegistroAnfitrion = () => {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={{ flex: 1, backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
            <View>
                <Text style={Styles.RegistroTitle}>Registro</Text>
                <Text>Crea una cuenta para acceder a todas las funcionalidades de Mascotas Cuidadas!</Text>
            </View>
            <View>
                <Text>Email</Text>
                <TextInput></TextInput>
                <Text>Tu nombre</Text>
                <TextInput></TextInput>
                <Text>Tu contraseña</Text>
                <TextInput></TextInput>
            </View>
            <View>
                <Button title='Registrarme'/>
            </View>
            <View>
                <Text>¿Ya tienes cuenta? Login</Text>
            </View>
        
        </View>
    )
}

const Styles = StyleSheet.create ({
    RegistroTitle: {
        fontFamily: 'Inter',
        color: 'red'
    }

})
export default RegistroAnfitrion;