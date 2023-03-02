import * as React from 'react'
import { Button, Text, View, useColorScheme, StyleSheet, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker'
import CommonButton from '../components/CommonButton';



const RegistroCuidadorMascota = ({ navigation }) => {
    const Separator = () => <View style={Styles.separator} />;
    const [date, setDate] = React.useState(new Date())
    const [open, setOpen] = React.useState(false)
    const isDarkMode = useColorScheme() === 'dark'
    const [checkboxes, setCheckboxes] = React.useState([
        { id: 1, label: 'Cualquier mascota', value: 'cualquiermascota', checked: false },
        { id: 2, label: 'Gatos', value: 'gatos', checked: false },
        { id: 3, label: 'Perros', value: 'perros', checked: false },
        { id: 4, label: 'Peces', value: 'peces', checked: false },
        { id: 5, label: 'Reptiles', value: 'reptiles', checked: false },
        { id: 6, label: 'Gallinas', value: 'gallinas', checked: false },
        { id: 7, label: 'Aves', value: 'aves', checked: false },
        { id: 8, label: 'Caballos', value: 'caballos', checked: false },
        { id: 9, label: 'Cobayo', value: 'cobayo', checked: false },
        { id: 10, label: 'Conejos', value: 'conejos', checked: false },
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
                <Text style={Styles.RegistroSubBlue}>Seleccioná tu preferencia de mascotas.</Text>
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
                <Separator/>
            </View>
            <View>
                <Text>Imagen</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <CommonButton onPress={() => navigation.navigate('TabsMascotas')} />
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

export default RegistroCuidadorMascota;