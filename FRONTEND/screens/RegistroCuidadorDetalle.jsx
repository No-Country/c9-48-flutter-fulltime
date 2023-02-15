import * as React from 'react'
import { Button, Text, TextInput, View, useColorScheme, StyleSheet, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SelectList } from 'react-native-dropdown-select-list';
import CheckBox from '@react-native-community/checkbox';





const RegistroCuidadorDetalle = ({ navigation }) => {
    const Separator = () => <View style={Styles.separator} />;
    const [selected, setSelected] = React.useState('');
    const isDarkMode = useColorScheme() === 'dark'

    const [date, setDate] = React.useState(new Date())
    const [open, setOpen] = React.useState(false)

    const dataCountries = [
        { key: '1', value: 'Argentina' },
        { key: '2', value: 'Bolivia' },
        { key: '3', value: 'Brazil' },
        { key: '4', value: 'Chile' },
        { key: '5', value: 'Colombia' },
        { key: '6', value: 'Ecuador' },
        { key: '7', value: 'Paraguay' },
        { key: '8', value: 'Uruguay' },
        { key: '9', value: 'Venezuela' },
    ]
    const dataCities = [
        { key: '1', value: 'A' },
        { key: '2', value: 'B' },
        { key: '3', value: 'C' },
        { key: '4', value: 'D' },
        { key: '5', value: 'E' },
        { key: '6', value: 'F' },
        { key: '7', value: 'G' },
        { key: '8', value: 'H' },
        { key: '9', value: 'I' },
    ]
    const [checkboxes, setCheckboxes] = React.useState([
        { id: 1, label: 'Cuando sea', value: 'cuandosea', checked: false },
        { id: 2, label: 'En dos meses', value: 'Endosmeses', checked: false },
        { id: 3, label: 'El próximo mes', value: 'Elproximomes', checked: false },
        { id: 4, label: 'Más adelante', value: 'Masadelante', checked: false },

    ]);
    const handleCheckboxToggle = (id) => {
        const updatedCheckboxes = checkboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
        setCheckboxes(updatedCheckboxes);
    };
    return (
        <View style={{ flex: 1, backgroundColor: isDarkMode ? Colors.black : Colors.white, padding: '5%' }}>
            <View>
                <Text style={Styles.RegistroTitle}>Encontrá hospedaje</Text>
                <Text style={Styles.RegistroSubBlue}>Ubicación</Text>
                <Text style={Styles.formTitles}>País</Text>
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={dataCountries}
                    save="value"
                    placeholder='Seleccioná el país...'
                    searchPlaceholder='Buscar'
                />
                <Text style={Styles.formTitles}>Ciudad</Text>
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={dataCities}
                    save="value"
                    placeholder='Seleccioná la ciudad...'
                    searchPlaceholder='Buscar'
                />
                <Separator />
                
            </View>
            <View>
                    <Text style={Styles.RegistroSubBlue}>¿Cuando quieres ir?</Text>
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
                <Separator />
            </View>

            <View>
                <Text style={Styles.RegistroSubBlue}>¿Cuál es tu experiencia con mascotas?</Text>
                <TextInput
                    style={Styles.input}
                    // onSubmitEditing={onChangeCuiEmail}
                    // value={CuidadorEmail}
                    multiline={true}
                    placeholder="Describe brevemente qué experiencia tienes con mascotas. ¿Has cuidado mascotas antes? ¿Qué tal ha sido?" />
                <Button
                    title='Siguiente'
                    color='#FF5E5E'
                    onPress={() => navigation.navigate('RegistroCuidadorCasa')}
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
        height: 100,
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

export default RegistroCuidadorDetalle;