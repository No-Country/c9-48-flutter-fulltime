import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Separator from "./Separator";

const DashboardPerfil = ({fotoPerfil, descripcionPerfil, identidadVerificada}) => {
    const [heartIcon, setHeartIcon] = useState('♡');

    const onHeartPress = () => {
    setHeartIcon(heartIcon === '♡' ? '❤️' : '♡');
    };
    return (
        <View style={styles.container}>
            <View style={styles.containerPorfilePicture}>
                <Image  
                style={{width: 150, height: 150}}
                source={{uri:fotoPerfil}}
                />
                <TouchableOpacity onPress={onHeartPress}>
                <Text style={{alignSelf: 'flex-end', fontSize: 25}}>{heartIcon}</Text>
                </TouchableOpacity>
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
        // backgroundColor: 'grey',
        marginVertical: 10
    },
    containerPorfilePicture: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'pink'
    },
    containerDescription: {
        flex: 1,
        flexGrow: 1,
        // backgroundColor: 'orange'
    },
    identidadVerificadaText: {
        padding: 20, 
        alignSelf: 'center'
    }
})

export default DashboardPerfil;