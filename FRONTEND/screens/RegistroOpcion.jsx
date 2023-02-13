import * as React from 'react'
import { Text, View , TouchableOpacity, StyleSheet, useColorScheme} from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';


const RegistroOpcion = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={{ flex: 1, backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
            <View style={Styles.containerTitle}>
                <Text style={Styles.bigTitle}>¿Qué tipo de cuenta deseas crear?</Text>
                <Text style={Styles.bigSub}> Elige tu perfil para ingresar</Text>
            </View>

            
            <TouchableOpacity 
                style={Styles.containerOption}
                onPress={() => navigation.navigate('RegistroAnfitrion')}
            >
                    <Text style={Styles.title}>Soy anfitrión</Text>
                    <Text style={Styles.sub}>Quiero encontrar un cuidador para mi casa y/o mascotas.</Text>
            </TouchableOpacity>



            <TouchableOpacity 
                style={Styles.containerOption}
                // onPress={() => navigation.navigate('RegistroCuidador')}
            >
                <Text style={Styles.title}>Soy cuidador</Text>
                <Text style={Styles.sub}>Busco hospedarme a cambio del cuidado de casas y mascotas.</Text>
            </TouchableOpacity>

        </View>
    )
}

const Styles = StyleSheet.create ({
    containerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%'
    },
    containerOption: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
        margin: 8,
        marginHorizontal:  60,
        borderWidth: 1,
        borderRadius: 20,
        borderStyle: 'solid', 
        borderColor: '#575DFB' 
    },

    bigTitle: {
        fontWeight: 400,
        fontSize: 20,
        color: 'black',
        padding: '5%'


    },
    bigSub: {
        fontWeight: 400,
        fontSize: 15,
        color: '#5F5B5B',
        padding: '5%'

    },
    title: {
        color: 'black',
        fontWeight: 600,
        fontSize: 16
        // fontFamily: Inter
    },
    sub: {
        color: 'black',
        fontWeight: 400,
        fontSize: 14

        // fontFamily: Consolas
}
})
export default RegistroOpcion;