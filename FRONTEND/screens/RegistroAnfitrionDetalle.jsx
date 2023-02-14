import * as React from 'react'
import { Button, Text, TextInput, View, useColorScheme, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const RegistroAnfitrionDetalle = ({ navigation }) => {

    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={{ flex: 1, backgroundColor: isDarkMode ? Colors.black : Colors.white, padding: '5%' }}>
            <View>
                <Text style={Styles.RegistroTitle}>Registro TEST DETALLE</Text>
                <Text style={Styles.RegistroSub}>¡Hemos enviado un correo electrónico a su cuenta con un código de verificación!</Text>
            </View>
            <View>
                <Text style={Styles.formTitles}>Código de verificación</Text>
                <TextInput
                    style={Styles.input}
                    // onSubmitEditing={onChangeCuiEmail}
                    // value={CuidadorEmail}
                    placeholder="Ex: testdetalle" />
            </View>
            <View>
                <Button
                    title='Siguiente'
                    color='#FF5E5E'
                // onPress={() => navigation.navigate('RegistroCuidadorDetalle')}
                />
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
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

})

export default RegistroAnfitrionDetalle;