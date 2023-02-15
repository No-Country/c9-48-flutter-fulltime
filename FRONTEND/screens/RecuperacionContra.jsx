import * as React from 'react';
import { View, Button, StyleSheet, Text, TextInput } from "react-native";


const InicioSesion = ({ navigation }) => {
    const [userEmail, onChangeEmail] = React.useState();

    return (
        <View style={styles.container}>
            <View style={{ backgroundcolor: 'red', alignSelf: 'flex-start' }}>
                <Button
                    title={String.fromCharCode(8592)}
                // onPress={() => navigation.navigate('Bienvenidos')}
                />
            </View>
            <View>
                <Text styles={styles.formTitles}>¿Olvidaste tu contraseña?</Text>
                <Text styles={styles.formSubs}>¡Recupera tu contraseña si la has olvidado!</Text>
            </View>
            <View>
                <Text style={styles.formTitles}>Email</Text>
                <TextInput
                    style={styles.input}
                    onSubmitEditing={onChangeEmail}
                    value={userEmail}
                    placeholder="Ex: abc@example.com " />
            </View>

            <Button
                title='Enviar'
                color='#FF5E5E'
            // onPress={() => function email}
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
    logo: {
        width: 167,
        height: 133
    },
    formTitles: {
        color: 'black',
        fontWeight: 400,
        fontSize: 16,
    },
    formSubs: {
        color: '#E94057',
        fontWeight: 400,
        fontSize: 14
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