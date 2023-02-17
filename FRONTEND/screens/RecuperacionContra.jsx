import * as React from 'react';
import { View, Button, StyleSheet, Text, TextInput } from "react-native";
import CommonButton from '../components/CommonButton';


const InicioSesion = ({ navigation }) => {
    const [userEmail, onChangeEmail] = React.useState();
    return (
        <View style={styles.container}>
            <View style={{ backgroundcolor: 'red', alignSelf: 'flex-start' }}>
                <Button
                    title={String.fromCharCode(8592)}
                onPress={() => navigation.navigate('InicioSesion')}
                />
            </View>
            <View style={{alignSelf:'flex-start' ,padding: 20}}>
                <Text style={styles.formTitles}>¿Olvidaste tu contraseña?</Text>
                <Text style={styles.formSubs}>¡Recupera tu contraseña si la has olvidado!</Text>
            </View>
            <View>
                <Text style={styles.formSubs}>Email</Text>
                <TextInput
                    style={styles.input}
                    onSubmitEditing={onChangeEmail}
                    value={userEmail}
                    placeholder="Ex: abc@example.com " />
            </View>

            <CommonButton
            buttonText={'ENVIAR'}
            // onPress={() => function email recuperacion}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: '#8a2be2'
    },
    formTitles: {
        color: '#FF5E5E',
        fontWeight: 700,
        fontSize: 24,
        // fontFamily: 'Inter'
    },
    formSubs: {
        color: 'black',
        fontWeight: 400,
        fontSize: 14,
        // fontFamily: 'Roboto'
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

});

export default InicioSesion;