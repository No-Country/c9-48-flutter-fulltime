import * as React from 'react'
import { Button, Text, TextInput, View, useColorScheme, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const RegistroAnfitrionVerificacion = ({ navigation }) => {

    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={{ flex: 1, backgroundColor: isDarkMode ? Colors.black : Colors.white, padding: '5%' }}>
            <View>
                <Text style={Styles.RegistroTitle}>Encontrá un Cuidador/a</Text>
                <Text style={Styles.SubBlue}>Mascota</Text>
                <Text style={Styles.RegistroSub}>Seleccioná las características de tu mascota.</Text>
            </View>
            <View>
                <Text style={Styles.SubBlue}>Tipo de Mascota</Text>
                <TextInput
                    style={Styles.input}
                    // onSubmitEditing={onChangeCuiEmail}
                    // value={CuidadorEmail}
                    multiline={true}
                    placeholder="¿Tienes un gato, un perro, u otro tipo de mascota? ¿Cuál?" />
            </View>
            <View>
                <Text style={Styles.SubBlue}>Cuidados necesarios de tu mascota</Text>
                <TextInput
                    style={Styles.input}
                    // onSubmitEditing={onChangeCuiEmail}
                    // value={CuidadorEmail}
                    multiline={true}
                    placeholder="Dinos si tu mascota requiere algún cuidado especial como darle alguna medicación u otra." />
            </View>
            <View>
                <Button
                    title='Siguiente'
                    color='#FF5E5E'
                    // onPress={() => navigation.navigate('DashboardGeneral')}
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
        fontWeight: 400,
        fontSize: 16,
        marginBottom: 12
        // fontFamily: 'Roboto'
    },
    SubBlue: {
        color: '#575DFB',
        fontWeight: 400,
        fontSize: 16,
        // fontFamily: 'Roboto'
    },
    formTitles: {
        color: 'black',
        fontWeight: 400,
        fontSize: 16,
    },
    input: {
        height: 80,
        margin: 12,
        borderWidth: 1.5,
        borderColor: '#575DFB',
        borderRadius: 16,
        padding: 10,
        textAlign: 'justify'
        
    }
})

export default RegistroAnfitrionVerificacion;