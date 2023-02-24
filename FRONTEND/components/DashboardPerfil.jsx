import { View, Text, StyleSheet } from "react-native";

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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 125,
        maxHeight: 175,
        backgroundColor: 'grey'
    },
    containerPorfilePicture: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'pink'
    },
    containerDescription: {
        flex: 2,
        flexGrow: 1,
        backgroundColor: 'orange'
    },
    identidadVerificadaText: {
        padding: 20, 
        alignSelf: 'center'
    }
})

export default DashboardPerfil;