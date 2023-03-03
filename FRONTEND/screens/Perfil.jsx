import {React, useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Image  } from "react-native";
import Separator from "../components/Separator";
import DropProfile from '../components/DropProfile';

const Perfil = () => {


    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Perfil Cuidador</Text>
                <Image
                    style={{width: 150, height: 150}}
                    source={{uri:'https://i.pravatar.cc/150?u=user14'}}
                />
                <Text>Carla</Text>
                <Text>Descripcion</Text>
                <Text>✅ Identidad Verificada</Text>
                <DropProfile
                Title={'Acerca de'}
                Texto={'Hola me llamo Carla soy viajera y amante de los animales. Mi sueño es recorrer todo Latam.'}
                />
                <DropProfile
                Title={'Preferencias de destino y alojamiento'}
                Texto={'Casa, Departamento, Monoambiente'}
                />
                <DropProfile
                Title={'Experiencia'}
                Texto={'Tengo mas de 10 años de experiencia en el cuidado de mascotas, estudio veterinaria a distancia.'}
                />
                <DropProfile
                Title={'Mascotas'}
                Texto={'Gatos, Perros, Peces'}
                />
                <DropProfile
                Title={'Mis Fotos'}
                Texto={'Foto 1, Foto 2'}
                />
                <DropProfile
                Title={'Referencias de Anfitriones'}
                Texto={'Referencia'}
                />
                <DropProfile
                Title={'Disponibilidad Fechas deseadas'}
                Texto={'Desde: 3/3/2022 - Hasta: 7-3-2022'}
                />
                <Separator/>
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

export default Perfil;
