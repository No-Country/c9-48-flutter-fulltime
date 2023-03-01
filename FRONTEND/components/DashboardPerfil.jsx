import { View, Text, StyleSheet } from "react-native";
import Separator from "./Separator";

const DashboardPerfil = ({fotoPerfil, descripcionPerfil, identidadVerificada}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerPorfilePicture}>
                <Text>{fotoPerfil}</Text>
            </View>
            <View style={styles.containerDescription}>
                <Text
                    style={styles.identidadVerificadaText}
                >
                    {descripcionPerfil}
                </Text>
                <Text 
                    style={styles.identidadVerificadaText}
                >
                    {identidadVerificada}
                </Text>
                
            </View>
            <Separator/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'grey',
        marginVertical: 10
    },
    containerPorfilePicture: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'pink'
    },
    containerDescription: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: 'orange'
    },
    identidadVerificadaText: {
        padding: 20, 
        alignSelf: 'center'
    }
})

export default DashboardPerfil;