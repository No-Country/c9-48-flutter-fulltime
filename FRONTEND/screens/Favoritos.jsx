import { View, Text, StyleSheet, ScrollView } from "react-native";
import Separator from "../components/Separator";
import DashboardPerfil from "../components/DashboardPerfil";


const Favoritos  = () => {

    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Favoritos</Text>
                <Separator/>
                <Text>Cuidadores</Text>
                <Text>Casas</Text>
                <Separator/>
                <DashboardPerfil
                fotoPerfil={'Soy una foto de perfil'}
                descripcionPerfil={'Hola me llamo Carla soy viajera y amante de los animales. Mi sueño es recorrer todo Latam.'}
                identidadVerificada={"✅ Identidad verificada"}
                />
                <DashboardPerfil
                fotoPerfil={'Soy una foto de perfil 2'}
                descripcionPerfil={'Desde chico crecí con dos perros y soy adiestrador de perros profesional. Soy Mexicano.'}
                identidadVerificada={"✅ Identidad verificada"}
                />
            </ScrollView>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'pink'
    },

})


export default Favoritos;

