import * as React from 'react'
import { Button, Text, View, useColorScheme, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';






const RegistroAnfitrionCasa = ({ navigation }) => {
    const Separator = () => <View style={Styles.separator} />;
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <View style={{ flex: 1, backgroundColor: isDarkMode ? Colors.black : Colors.white, padding: '5%' }}>
            <View>
                <Text style={Styles.RegistroTitle}>Encontrá un cuidador/a</Text>
                <Text style={Styles.SubBlue}>Seleccioná las características de tu casa.</Text>


                <Separator />
            </View>
            <View>
                <Text style={Styles.SubBlue}>Fotos de mi casa</Text>
                <Text style={Styles.RegistroSub}>"Sube al menos 6 fotos de tu casa o depto.
                    (No incluyas información sensible de tu domicilio).</Text>
            </View>
            <View>
                <Button
                    title='Siguiente'
                    color='#FF5E5E'
                // onPress={() => navigation.navigate('RegistroAnfitrionMascota')}
                />
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    RegistroTitle: {
        color: '#FF5E5E',
        fontWeight: 700,
        fontSize: 24,
        // fontFamily: 'Inter'
    },
    RegistroSub: {
        color: 'black',
        fontWeight: 400,
        fontSize: 14,
        marginBottom: 12
        // fontFamily: 'Roboto'

    },
    SubBlue: {
        color: '#575DFB',
        fontWeight: 400,
        fontSize: 14,
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
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})

export default RegistroAnfitrionCasa;