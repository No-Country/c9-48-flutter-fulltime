import * as React from 'react';
import { View, Image, Button, StyleSheet } from "react-native";


const Bienvenidos = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <Button
                    title='<-'
                    color='black'
                    onPress={() => navigation.navigate('CarouselIntro')}
                />
            </View>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/Logo.png')} />
            </View>
            <Button
                title='Crear Cuenta'
                color='#575DFB'
                // onPress={() => navigation.navigate('CarouselIntro')}
            />
            <Button
                title='Inicia Sesión'
                color= '#FF5E5E'
                // onPress={() => navigation.navigate('CarouselIntro')}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
    width: '50%',
    height: '50%',
    }
});

export default Bienvenidos;