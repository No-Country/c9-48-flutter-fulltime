import * as React from 'react'
import { Text, View , TouchableOpacity, StyleSheet} from "react-native";


const RegistroOpcion = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <Text>
                ¿Qué tipo de cuenta deseas crear?
            </Text>
            <Text>Elige tu perfil para ingresar</Text>
            <View>
                <TouchableOpacity>
                    <Text>Soy anfitrión</Text>
                    <Text>Quiero encontrar un cuidador para mi casa y/o mascotas.</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Soy cuidador</Text>
                    <Text>Busco hospedarme a cambio del cuidado de casas y mascotas.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create ({
container: {
    flex: 1,
    padding: 20,
    alignContent: 'center'
}
})
export default RegistroOpcion;