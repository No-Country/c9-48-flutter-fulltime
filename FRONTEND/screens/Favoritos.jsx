import { View, Text, StyleSheet, ScrollView } from "react-native";
import Separator from "../components/Separator";
import DashboardPerfil from "../components/DashboardPerfil";


const Favoritos  = ({heartIcon}) => {

    return (
        <View>           
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Tus Favoritos</Text>
                <Separator/>
                    <View style={{flexDirection: 'row'}}>
                    <Text>Cuidadores </Text>
                    <Text>Casas</Text>
                </View>
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

})


export default Favoritos;

