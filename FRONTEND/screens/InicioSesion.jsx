import * as React from 'react';
import { View, Image, Button, StyleSheet, Text, TextInput } from "react-native";
import CommonButton from '../components/CommonButton';


const InicioSesion = ({ navigation }) => {
    const [userEmail, onChangeEmail] = React.useState();
    const [userPass, onChangeUserPass] = React.useState();
    const Separator = () => <View style={styles.separator} />;


    return (
        <View style={styles.container}>
            <View style={{backgroundcolor: 'red', alignSelf: 'flex-start'}}>
                <Button
                    title={String.fromCharCode(8592)}
                onPress={() => navigation.navigate('Bienvenidos')}
                />

            </View>
                <Image
                    style={styles.logo}
                    resizeMode='cover'
                    source={require('../assets/Logo.png')} />
            <View>

                <Text style={styles.formTitles}>Email</Text>
                <TextInput
                    style={styles.input}
                    onSubmitEditing={onChangeEmail}
                    value={userEmail}
                    placeholder="Ex: abc@example.com " />
                <Text style={styles.formTitles}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    onSubmitEditing={onChangeUserPass}
                    value={userPass}
                    placeholder="*******" />
            </View>
            <CommonButton 
            buttonText={'INICIAR SESION'}
            onPress={() => navigation.navigate('Dashboard')}  />

            <View style={styles.ForgotPass}>
                <Text onPress={() => navigation.navigate('RecuperacionContra')}>
                    ¿Olvidaste tu contaseña?
                </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.linesContainer}>
                    <Separator />
                </View>
                <Text>o regístrate con </Text>
                <View style={styles.linesContainer}>
                    <Separator />
                </View>
            </View>
            <View style={styles.socialsContainer}>
                <Text>Logo 1</Text>
                <Text>Logo 2</Text>
                <Text>Logo 3</Text>
            </View>
            <View style={{ flex: 2 }}>
                <View style={styles.termsContainer}>
                    <Text 
                    style={styles.formSubs}
                    // onPress={() => navigation.navigate('TermsOfSerivice')}
                    >
                        Term Of Service </Text>
                    <Text style={styles.formSubs}
                    // onPress={() => navigation.navigate('PrivacyPolicy')}
                    >
                        Privacy Policy </Text>
                </View>
            </View>
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
    ForgotPass: {
        alignItems: 'flex-end',
        // backgroundColor: '#00ffff',
        width: 350,
        margin: 10,
    },
    separator: {
        marginVertical: 10,
        borderBottomColor: '#737373',
        borderBottomWidth: 1,
    },
    linesContainer: {
        width: 100,
        marginHorizontal: 10
    },
    socialsContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly',  
        margin: 20,
        width: '100%',
        // backgroundColor: 'green'
    },
    termsContainer: { 
    alignItems: 'flex-end',
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    // backgroundColor: 'pink', 
    flex: 2 }

});

export default InicioSesion;