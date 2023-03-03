import * as React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'; 
import CheckBox from '@react-native-community/checkbox';
import CalendarRegister from '../components/CalendarRegister';
import CommonButton from '../components/CommonButton';
import CheckboxMascotas from '../components/CheckboxMascotas';


const RegistroCuidadorCasa = ({ navigation }) => {
    const Separator = () => <View style={Styles.separator} />;
    const [dateFromCui, setDateFromCui] = React.useState(new Date())
    const [fechaIngresoCui, setFechaIngresoCui] = React.useState("DD/MM/AAAA")

    const [dateToCui, setDateToCui] = React.useState(new Date())
    const [fechaEgresoCui, setFechaEgresoCui] = React.useState("DD/MM/AAAA")


    return (
        <View style={{ flex: 1, padding: '5%' }}>
            <Text style={Styles.RegistroTitle}>Encontrá hospedaje</Text>
                <View>
                    <Text style={Styles.RegistroSubBlue}>Desde</Text>
                    <Text style={Styles.RegistroSub}>Ingresá la fecha de inicio en la que deseas que buscas hospedaje.</Text>
                    <CalendarRegister date={dateFromCui} setDate={setDateFromCui} buttonTitle={fechaIngresoCui} setButtonTitle={setFechaIngresoCui} />
                </View>
                <View>
                    <Text style={Styles.RegistroSubBlue}>Hasta</Text>
                    <Text style={Styles.RegistroSub}>Ingresá la fecha de cierre en la que deseas que buscas hospedaje.</Text>
                    <CalendarRegister date={dateToCui} setDate={setDateToCui} buttonTitle={fechaEgresoCui} setButtonTitle={setFechaEgresoCui} />
                    <Separator/>
            </View>
            <View>
                <CheckboxMascotas/>
            </View>
            <View>
                <Text>Fecha de Ingreso {fechaIngresoCui}</Text>
                <Text>Fecha de Egreso {fechaEgresoCui}</Text>
                <View style={{ alignItems: 'center' }}>
                    <CommonButton onPress={() => navigation.navigate('RegistroCuidadorMascota')} />
                </View>
                
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    flatListContent: {
        justifyContent: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    checkboxLabelContainer: {
        marginLeft: 8,
    },
    checkboxLabel: {
        fontSize: 16,
    },
    RegistroTitle: {
        color: '#FF5E5E',
        fontWeight: 700,
        fontSize: 24,
        // fontFamily: 'Inter'
    },
    RegistroSub: {
        color: 'black',
        fontWeight: 400,
        fontSize: 14,
        marginBottom: 12
        // fontFamily: 'Roboto'

    },
    RegistroSubBlue: {
        color: '#575DFB',
        fontWeight: 400,
        fontSize: 14,
        // fontFamily: 'Roboto'
    },
    formTitles: {
        color: 'black',
        fontWeight: 400,
        fontSize: 16,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1.5,
        borderColor: '#575DFB',
        borderRadius: 16,
        padding: 10,

    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})

export default RegistroCuidadorCasa;