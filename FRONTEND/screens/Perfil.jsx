import {React, useState} from 'react'
import { View, Text, StyleSheet, ScrollView  } from "react-native";
import Separator from "../components/Separator";
import DropProfile from '../components/DropProfile';

const Perfil = () => {


    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Perfil ? Cuidador : Anfitrion</Text>
                <Text>Photo</Text>
                <Text>Nombre</Text>
                <Text>Descripcion</Text>
                <Text>Identidad Verificada</Text>
                <DropProfile
                Title={'Acerca de'}
                Texto={'Soy fulano mengano '}
                />
                <DropProfile
                Title={'Preferencias de destino y alojamiento'}
                Texto={'Checkbox 1, checkbox 2'}
                />
                <DropProfile
                Title={'Experiencia'}
                Texto={'asdsaadsasd'}
                />
                <DropProfile
                Title={'Mascotas'}
                Texto={'Checkbox 1, checkbox 2'}
                />
                <DropProfile
                Title={'Mis Fotos'}
                Texto={'Checkbox 1, checkbox 2'}
                />
                <DropProfile
                Title={'Referencias de Anfitriones'}
                Texto={'Ref 1, ref2'}
                />
                <DropProfile
                Title={'Disponibilidad Fechas deseadas'}
                Texto={'Calendario 1, calendario 2'}
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
