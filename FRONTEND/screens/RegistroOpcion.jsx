import * as React from 'react'
import { Text, View , TouchableOpacity, StyleSheet, useColorScheme} from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';


const RegistroOpcion = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={{ flex: 1, backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
            <View style={Styles.containerTitle}>
                <Text style={Styles.bigTitle}>¿Qué tipo de cuenta deseas crear?</Text>
                <Text> Elige tu perfil para ingresar</Text>
            </View>

            
            <TouchableOpacity style={Styles.containerOption}>
                    <Text style={Styles.title}>Soy anfitrión</Text>
                    <Text>Quiero encontrar un cuidador para mi casa y/o mascotas.</Text>
            </TouchableOpacity>



            <TouchableOpacity style={Styles.containerOption}>
                <Text style={Styles.title}>Soy cuidador</Text>
                <Text>Busco hospedarme a cambio del cuidado de casas y mascotas.</Text>
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
        fontWeight: 'bold',
        padding: '5%'
    },
    title: {
        fontWeight: 'bold'
        
    },
    sub: {
        fontWeight: 'normal'
}
})
export default RegistroOpcion;