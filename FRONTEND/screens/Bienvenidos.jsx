import * as React from 'react';
import { View, Image, Button, StyleSheet, useColorScheme } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CommonButton from '../components/CommonButton';


const Bienvenidos = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={{alignSelf: 'flex-start' }}>
                <Button 
                    title='Atrás'
                    color='grey'
                    onPress={() => navigation.navigate('CarouselIntro')}
                />
                </View>
                <Image
                    resizeMode='center'
                    source={require('../assets/Logo.png')} />
            <View style={styles.ButtonContainer}>
                <CommonButton
                    buttonText={'Crear Cuenta'}
                    onPress={() => navigation.navigate('RegistroOpcion')}
                />
                <CommonButton
                    buttonText={'Inicia Sesión'}
                    ButtonColor={style.blue}
                    onPress={() => navigation.navigate('InicioSesion')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'red'
    },
    ButtonContainer: {
        padding: 20, 
        // backgroundColor: 'green'
    }

});

export default Bienvenidos;