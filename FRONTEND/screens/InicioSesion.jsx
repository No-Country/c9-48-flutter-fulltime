import * as React from 'react';
import { View, Image, Button, StyleSheet, useColorScheme, Text, TextInput, Linking } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';


const InicioSesion = ({ navigation }) => {
    const [userEmail, onChangeEmail] = React.useState();
    const [AnfitrionName, onChangeAnfName] = React.useState();
    const [userPass, onChangeUserPass] = React.useState();
    const isDarkMode = useColorScheme() === 'dark'


    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.black : Colors.white, }]}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    resizeMode='center'
                    source={require('../assets/Logo.png')} />
            </View>
            <View>
                <Text style={styles.formTitles}>Email</Text>
                <TextInput
                    style={styles.input}
                    onSubmitEditing={onChangeEmail}
                    value={userEmail}
                    placeholder="Ex: abc@example.com " />
                <Text style={styles.formTitles}>Contraseña</Text>
                <TextInput
                    style={[styles.input, { marginBottom: 0 }]}
                    onSubmitEditing={onChangeUserPass}
                    value={userPass}
                    placeholder="*******" />
                <Text style={{ marginBottom: 12 }}>Mínimo ingresa 7 caracteres</Text>
            </View>

            <View>
                <Button
                    title='Iniciar Sesion'
                    color='#FF5E5E'
                // onPress={() => navigation.navigate('Dashboard')}
                />
                <View>
                    <Text onPress={() => navigation.navigate('InicioSesion')}>
                        ¿Olvidaste tu contaseña?
                    </Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '40%',
        width: '70%',
        // backgroundColor:'grey'
    },
    logo: {
        height: '100%',
        width: '100%'
    },
    buttonStyle: {
        paddingHorizontal: '20%',
        marginVertical: 8
    },
    RegistroTitle: {
        color: '#FF5E5E',
        fontWeight: 700,
        fontSize: 32,
        // fontFamily: 'Inter'
    },
    RegistroSub: {
        color: 'black',
        fontWeight: 700,
        fontSize: 16,
        marginBottom: 12
        // fontFamily: 'Roboto'
    },
    formTitles: {
        color: 'black',
        fontWeight: 400,
        fontSize: 16,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1.5,
        borderColor: '#575DFB',
        borderRadius: 16,
        padding: 10,
    },

});

export default InicioSesion;