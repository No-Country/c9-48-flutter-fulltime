import * as React from 'react'
import { Button, Text, View, useColorScheme, StyleSheet, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CheckBox from '@react-native-community/checkbox';
import CalendarRegister from '../components/CalendarRegister';


const RegistroCuidadorCasa = ({ navigation }) => {
    const Separator = () => <View style={Styles.separator} />;
    const [dateFromCui, setDateFromCui] = React.useState(new Date())
    const [fechaIngresoCui, setFechaIngresoCui] = React.useState("DD/MM/AAAA")

    const [dateToCui, setDateToCui] = React.useState(new Date())
    const [fechaEgresoCui, setFechaEgresoCui] = React.useState("DD/MM/AAAA")

    const isDarkMode = useColorScheme() === 'dark'
    const [checkboxes, setCheckboxes] = React.useState([
        { id: 1, label: 'casa', value: 'casa', checked: false },
        { id: 2, label: 'depto', value: 'depto', checked: false },
        { id: 3, label: 'monoambiente', value: 'monoambiente', checked: false },
        { id: 4, label: '2 ambientes', value: '2ambientes', checked: false },
        { id: 5, label: '3 ambientes', value: '3ambientes', checked: false },
        { id: 6, label: '4 ambientes o más', value: '4ambientes', checked: false },
        { id: 7, label: 'TV', value: 'TV', checked: false },
        { id: 8, label: 'balcón/patio', value: 'balcón/patio', checked: false },
        { id: 9, label: 'terraza', value: 'terraza', checked: false },
        { id: 10, label: 'jardín', value: 'jardín', checked: false },
        { id: 11, label: 'piscina', value: 'piscina', checked: false }
    ]);

    const handleCheckboxToggle = (id) => {
        const updatedCheckboxes = checkboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <View style={{ flex: 1, backgroundColor: isDarkMode ? Colors.black : Colors.white, padding: '5%' }}>
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
                
                <Text style={Styles.RegistroSubBlue}>Seleccioná tus preferencias hospedaje.</Text>
                <FlatList
                    data={checkboxes}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={Styles.checkboxContainer}>
                            <Text style={Styles.checkboxLabel}>{item.label}</Text>
                            <CheckBox
                                disabled={false}
                                value={item.checked}
                                onValueChange={() => handleCheckboxToggle(item.id)}
                            />
                        </View>
                    )}
                />
            </View>
            <View>
                <Text>Fecha de Ingreso {fechaIngresoCui}</Text>
                <Text>Fecha de Egreso {fechaEgresoCui}</Text>
                <Button
                    title='Siguiente'
                    color='#FF5E5E'
                    onPress={() => navigation.navigate('RegistroCuidadorMascota')}
                />
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