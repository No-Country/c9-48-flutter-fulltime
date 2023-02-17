import * as React from 'react';
import { View, Image, Button, StyleSheet, Text } from "react-native";
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
            <Text>Bienvenidos y bienvenidas a  </Text>

                <Image
                    resizeMode='center'
                    source={require('../assets/Logo.png')} />
                <View style={styles.ButtonContainer}>
                <CommonButton
                    buttonContainer
                    buttonText={'Crear Cuenta'}
                    onPress={() => navigation.navigate('RegistroOpcion')}
                />
                </View>
                <View style={styles.ButtonContainer}>
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
        // backgroundColor: 'pink'
    },
    ButtonContainer: {
        flex: 1,
        margin: 20, 
        justifyContent: 'center'
        // backgroundColor: 'green'
    }

});

export default Bienvenidos;