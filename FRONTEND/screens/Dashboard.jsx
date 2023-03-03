import { View, Text, StyleSheet, ScrollView, TextInput} from "react-native";
import Separator from "../components/Separator";
import DashboardPerfil from "../components/DashboardPerfil";


const Dashboard = () => {

    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                style={styles.input}
                placeholder="Buscador 🔍"
                >
                </TextInput>
                <Separator/>
                <View style={{flexDirection: 'row'}}>
                    <Text>Cuidadores </Text>
                    <Text>Casas</Text>
                </View>

                <Separator/>
                <DashboardPerfil
                fotoPerfil={'https://i.pravatar.cc/150?u=user5'}
                descripcionPerfil={'Hola me llamo Carla soy viajera y amante de los animales. Mi sueño es recorrer todo Latam.'}
                identidadVerificada={"✅ Identidad verificada"}
                />
                <DashboardPerfil
                fotoPerfil={'https://i.pravatar.cc/150?u=user15'}
                descripcionPerfil={'Desde chico crecí con dos perros y soy adiestrador de perros profesional. Soy Mexicano.'}
                identidadVerificada={"✅ Identidad verificada"}
                />
                <DashboardPerfil
                fotoPerfil={'https://i.pravatar.cc/150?u=user9'}
                descripcionPerfil={'Amo viajar sola y no se me ocurre forma que estando acompañada de mascotas.'}
                identidadVerificada={"✅ Identidad verificada"}
                />
                <DashboardPerfil
                fotoPerfil={'https://i.pravatar.cc/150?u=user12'}
                descripcionPerfil={'Estoy recorriendo varias ciudades de Argentina el mes próximo. Amo las mascotas.'}
                identidadVerificada={"✅ Identidad verificada"}
                />
                <DashboardPerfil
                fotoPerfil={'https://i.pravatar.cc/150?u=user11'}
                descripcionPerfil={'Soy Sofia y tengo experiencia en el cuidado de mascotas. Soy amante de los animales y me encanta pasear con ellos por la ciudad.'}
                identidadVerificada={"✅ Identidad verificada"}
                />
                <DashboardPerfil
                fotoPerfil={'https://i.pravatar.cc/150?u=user2334'}
                descripcionPerfil={'Soy Gabriel y he tenido mascotas toda mi vida. Me encanta pasar tiempo con ellos, jugar y pasear por la ciudad. También tengo experiencia en el cuidado de mascotas de otras personas.'}
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
    input: {
        height: 56,
        width: 278,
        margin: 12,
        borderWidth: 1.5,
        borderColor: '#575DFB',
        borderRadius: 16,
        padding: 10,
    },

})


export default Dashboard;

