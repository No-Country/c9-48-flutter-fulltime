import * as React from 'react'
import { Button, Text, TextInput, View, useColorScheme, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CommonButton from '../components/CommonButton';



const RegistroCuidador = ({ navigation }) => {
    const [CuidadorEmail, onChangeCuiEmail] = React.useState();
    const [CuidadorName, onChangeCuiName] = React.useState();
    const [CuidadorPass, onChangeCuiPass] = React.useState();
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={Styles.container}>
            <View style={{alignItems: 'flex-start'}}>
                <Text style={Styles.RegistroTitle}>Registro Cuidador</Text>
                <Text style={Styles.RegistroSub}>Crea una cuenta para acceder a todas las funcionalidades de Mascotas Cuidadas!</Text>
                <Text style={Styles.formTitles}>Email</Text>
                <TextInput
                    style={Styles.input}
                    onSubmitEditing={onChangeCuiEmail}
                    value={CuidadorEmail}
                    placeholder="Ex: abc@example.com " />
                <Text style={Styles.formTitles}>Tu nombre</Text>
                <TextInput
                    style={Styles.input}
                    onSubmitEditing={onChangeCuiName}
                    value={CuidadorName}
                    placeholder="Ex. Saul Ramirez" />
                <Text style={Styles.formTitles}>Tu contraseña</Text>
                <TextInput
                    style={[Styles.input, { marginBottom: 0 }]}
                    onSubmitEditing={onChangeCuiPass}
                    value={CuidadorPass}
                    placeholder="*******" />
                <Text style={{ marginBottom: 12 }}>Mínimo ingresa 7 caracteres</Text>
            </View>
            <View style={{ padding: 20 }}>
                <CommonButton
                buttonText={'Registrarme'}
                    onPress={() => navigation.navigate('RegistroCuidadorVerificacion')}
                />
            </View>
            <View>
                <Text
                    onPress={() => navigation.navigate('InicioSesion')}>
                    ¿Ya tienes cuenta? Login
                </Text>
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'pink'
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
        marginBottom: 12,
        // fontFamily: 'Roboto'
    },
    formTitles: {
        color: 'black',
        fontWeight: 400,
        fontSize: 16,
    },
    input: {
        height: 56,
        width: 278,
        margin: 12,
        borderWidth: 1.5,
        borderColor: '#575DFB',
        borderRadius: 16,
        padding: 10,
    },

})

export default RegistroCuidador;