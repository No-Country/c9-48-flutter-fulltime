import {React, useState} from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native';
import CommonButton from '../components/CommonButton';
import axios from 'axios';


const RegistroCuidador = ({ navigation }) => {
    const [CuidadorEmail, onChangeCuiEmail] = useState();
    const [CuidadorName, onChangeCuiName] = useState();
    const [CuidadorPass, onChangeCuiPass] = useState();
    const sendCuidadorRegister = async () => {   
        await axios({
            method: 'post',
            url: 'https://mascotascuidadas.onrender.com/users',
            data: {
                name: CuidadorName,
                email: CuidadorEmail,
                password: CuidadorPass,
                isOwner: false
        }  
    })
    } 
    return (
        <View style={Styles.container}>
            <View style={{alignItems: 'flex-start'}}>
                <Text style={Styles.RegistroTitle}>Registro Cuidador</Text>
                <Text style={Styles.RegistroSub}>Crea una cuenta para acceder a todas las funcionalidades de Mascotas Cuidadas!</Text>
            </View>
            <View>
                <Text style={Styles.formTitles}>Email</Text>
                <TextInput
                    style={Styles.input}
                    onChangeText={text => onChangeCuiEmail(text)}
                    value={CuidadorEmail}
                    placeholder="Ex: abc@example.com " />
                <Text style={Styles.formTitles}>Tu nombre</Text>
                <TextInput
                    style={Styles.input}
                    onChangeText={text => onChangeCuiName(text)}
                    value={CuidadorName}
                    placeholder="Ex. Saul Ramirez" />
                <Text style={Styles.formTitles}>Tu contraseña</Text>
                <TextInput
                    style={[Styles.input, { marginBottom: 0 }]}
                    onChangeText={text => onChangeCuiPass(text)}
                    value={CuidadorPass}
                    placeholder="*******" />
                <Text style={{ marginBottom: 12 }}>Mínimo ingresa 7 caracteres</Text>
            </View>
            <View style={{ padding: 20 }}>
                <CommonButton
                buttonText={'Registrarme'}
                    onPress={() => 
                        navigation.navigate('RegistroCuidadorVerificacion')
                        // sendCuidadorRegister()
                    }
                />
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text onPress={() => navigation.navigate('InicioSesion')}>¿Ya tienes cuenta? </Text>
                <Text style={{ color: '#575DFB'}}
                onPress={() => navigation.navigate('InicioSesion')}>Login</Text>
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
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

export default RegistroCuidador;