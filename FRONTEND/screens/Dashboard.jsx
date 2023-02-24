import { Text, StyleSheet, ScrollView } from "react-native";
import Separator from "../components/Separator";
import DashboardPerfil from "../components/DashboardPerfil";

const Dashboard = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Buscador🔍</Text>
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
            <DashboardPerfil
            fotoPerfil={'Soy una foto de perfil 3'}
            descripcionPerfil={'Amo viajar sola y no se me ocurre forma que estando acompañada de mascotas.'}
            identidadVerificada={"✅ Identidad verificada"}
            />
            <DashboardPerfil
            fotoPerfil={'Soy una foto de perfil 4'}
            descripcionPerfil={'Estoy recorriendo varias ciudades de México el mes próximo. Amo las mascotas.'}
            identidadVerificada={"✅ Identidad verificada"}
            />
            <DashboardPerfil
            fotoPerfil={'Soy una foto de perfil 5'}
            descripcionPerfil={'Descrpcion 5'}
            identidadVerificada={"✅ Identidad verificada"}
            />
            <DashboardPerfil
            fotoPerfil={'Soy una foto de perfil 6'}
            descripcionPerfil={'Descrpcion 6'}
            identidadVerificada={"✅ Identidad verificada"}
            />
            
        </ScrollView>
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


export default Dashboard;