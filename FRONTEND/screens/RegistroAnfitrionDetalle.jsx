import * as React from 'react'
import { Text, View, useColorScheme, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CalendarRegister from '../components/CalendarRegister'
import CommonButton from '../components/CommonButton';
import CountryPicker from '../components/CountryPicker';
import CityPicker from '../components/CityPicker';

const RegistroAnfitrionDetalle = ({ navigation }) => {
    const Separator = () => <View style={Styles.separator} />;
    const [selectedAnfPais, setSelectedAnfPais] = React.useState('');
    const [selectedAnfCiudad, setSelectedAnfCiudad] = React.useState('');
    
    const isDarkMode = useColorScheme() === 'dark'
    
    const [dateFrom, setDateFrom] = React.useState(new Date())
    const [fechaIngreso, setFechaIngreso] = React.useState("DD/MM/AAAA")
    
    const [dateTo, setDateTo] = React.useState(new Date())
    const [fechaEgreso, setFechaEgreso] = React.useState("DD/MM/AAAA")
    


    return (
        <View style={{ flex: 1, backgroundColor: isDarkMode ? Colors.black : Colors.white, padding: '5%' }}>
            <View>
                <Text style={Styles.RegistroTitle}>Encontrá un cuidador/a</Text>
                <Text style={Styles.DesdeHasta}>Ubicación</Text>
                <Text style={Styles.formTitles}>País</Text>
                <CountryPicker setSelected={setSelectedAnfPais}/>
                <Text style={Styles.formTitles}>Ciudad</Text>
                <CityPicker  setSelected={setSelectedAnfCiudad} />

                <Separator/>
            </View>
            <View>
                <Text style={Styles.DesdeHasta}>Desde</Text>
                <Text style={Styles.RegistroSub}>Ingresá la fecha de inicio en la que deseas que buscas cuidador.</Text>
                <CalendarRegister date={dateFrom} setDate={setDateFrom} buttonTitle={fechaIngreso} setButtonTitle={setFechaIngreso}/>
            </View>
            <View>
                <Text style={Styles.DesdeHasta}>Hasta</Text>
                <Text style={Styles.RegistroSub}>Ingresá la fecha de cierre en la que deseas que buscas cuidador.</Text>
                <CalendarRegister date={dateTo} setDate={setDateTo} buttonTitle={fechaEgreso} setButtonTitle={setFechaEgreso} />
                <Separator/>
                <Text>Pais Seleccionado {selectedAnfPais}</Text>
                <Text>Ciudad Seleccionada {selectedAnfCiudad}  </Text>
                <Text>Fecha de Ingreso {fechaIngreso}</Text>
                <Text>Fecha de Egreso {fechaEgreso}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <CommonButton onPress={() => navigation.navigate('RegistroAnfitrionCasa')} />
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
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
    DesdeHasta: {
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

export default RegistroAnfitrionDetalle;