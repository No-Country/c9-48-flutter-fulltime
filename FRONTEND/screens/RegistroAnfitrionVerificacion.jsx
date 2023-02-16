import * as React from 'react'
import { Button, Text, TextInput, View, useColorScheme, StyleSheet } from 'react-native';
import CommonButton from '../components/CommonButton';




const RegistroAnfitrionVerificacion = ({ navigation }) => {

    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={Styles.container}>
            <View>
                <Text style={Styles.RegistroTitle}>Registro Anfitrión</Text>
                <Text style={Styles.RegistroSub}>¡Hemos enviado un correo electrónico a su cuenta con un código de verificación!</Text>
            </View>
            <View>
                <Text style={Styles.formTitles}>Código de verificación</Text>
                <TextInput
                    style={Styles.input}
                    // onSubmitEditing={onChangeCuiEmail}
                    // value={CuidadorEmail}
                    placeholder="Ex: 123456" />
            </View>
            <View>
                <CommonButton
                onPress={() => navigation.navigate('RegistroAnfitrionDetalle')}
                />
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
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

export default RegistroAnfitrionVerificacion;