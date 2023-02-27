import {React, useState} from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native';
import CommonButton from '../components/CommonButton';
import axios from 'axios';

const RegistroAnfitrion = ({ navigation }) => {
    const [AnfitrionEmail, onChangeAnfEmail] = useState('');
    const [AnfitrionName, onChangeAnfName] = useState('');
    const [AnfitrionPass, onChangeAnfPass] = useState('');
    const sendAnfitrionRegister = async () => {   
        await axios({
            method: 'post',
            url: 'https://mascotascuidadas.onrender.com/users',
            data: {
                name: AnfitrionName,
                email: AnfitrionEmail,
                password: AnfitrionPass,
                isOwner: true
        }  
    })
    // console.log(data)
    }  
    return (
        <View style={Styles.container}>
            <View style={{ alignItems: 'flex-start' }}>
                <Text style={Styles.RegistroTitle}>Registro Anfitrión</Text>
                <Text style={Styles.RegistroSub}>Crea una cuenta para acceder a todas las funcionalidades de Mascotas Cuidadas!</Text>
            </View>
            <View>
                <Text style={Styles.formTitles}>Email</Text>
                <TextInput
                    style={Styles.input}
                    onChangeText={text => onChangeAnfEmail(text)}
                    value={AnfitrionEmail}
                    placeholder="Ex: abc@example.com "/>
                <Text style={Styles.formTitles}>Tu nombre</Text>
                <TextInput
                    style={Styles.input}
                    onChangeText={text => onChangeAnfName(text)}
                    value={AnfitrionName}
                    placeholder="Ex. Saul Ramirez"/>
                <Text style={Styles.formTitles}>Tu contraseña</Text>
                <TextInput
                    style={[Styles.input, {marginBottom: 0}]}
                    onChangeText={text => onChangeAnfPass(text)}
                    value={AnfitrionPass}
                    secureTextEntry={true}
                    placeholder="*******"/>
                <Text style={{marginBottom: 12}}>Mínimo ingresa 7 caracteres</Text>
            </View>
            <View style={{padding: 20}}>
                <CommonButton 
                buttonText='Registrarme'
                onPress={() => 
                    sendAnfitrionRegister()
                }
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text onPress={() => navigation.navigate('InicioSesion')}>¿Ya tienes cuenta? </Text>
                <Text style={{ color: '#575DFB' }}
                    onPress={() => navigation.navigate('InicioSesion')}>Login</Text>
            </View>
        
        </View>
    )
}

const Styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'pink'
    },
    RegistroTitle: {
        color: '#FF5E5E',
        fontWeight: 700,
        fontSize: 32,
        // fontFamily: 'Inter'
    },
    RegistroSub: {
        color: 'black',
        fontWeight: 700,
        fontSize: 16,
        marginBottom: 12,
        // fontFamily: 'Roboto'
    },
    formTitles: {
        color: 'black',
        fontWeight: 400,
        fontSize: 16,
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


})

export default RegistroAnfitrion;