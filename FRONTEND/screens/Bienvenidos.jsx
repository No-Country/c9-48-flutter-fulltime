import * as React from 'react';
import { View, Image, Button, StyleSheet, useColorScheme } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Bienvenidos = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.black : Colors.white, }]}>
            <View style={{ position: "relative",  flexDirection: "column", alignSelf: "flex-start", padding: '5%' }} >
                <Button
                    title='Atrás'
                    color='grey'
                    onPress={() => navigation.navigate('CarouselIntro')}
                />
            </View>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/Logo.png')} />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title='Crear Cuenta'
                    color='#575DFB'
                    onPress={() => navigation.navigate('RegistroOpcion')}
                
                />

            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title='Inicia Sesión'
                    color='#FF5E5E'
                    // onPress={() => navigation.navigate('CarouselIntro')}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,

    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
    width: '65%',
    height: '65%',
    },
    buttonStyle: {
        paddingHorizontal: '20%',
        marginVertical: 8
    }

});

export default Bienvenidos;