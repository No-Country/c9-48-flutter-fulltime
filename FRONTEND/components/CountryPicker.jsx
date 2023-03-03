import { SelectList } from 'react-native-dropdown-select-list';

const CountryPicker = ({setSelected}) => {
    const dataCountries = [
    { key: '1', value: 'Argentina' },
    // { key: '2', value: 'Bolivia' },
    // { key: '3', value: 'Brazil' },
    // { key: '4', value: 'Chile' },
    // { key: '5', value: 'Colombia' },
    // { key: '6', value: 'Ecuador' },
    // { key: '7', value: 'Paraguay' },
    // { key: '8', value: 'Uruguay' },
    // { key: '9', value: 'Venezuela' },
]
return(
    <SelectList
        setSelected={(val) => setSelected(val)}
        data={dataCountries}
        save="value"
        placeholder='Seleccioná el país...'
        searchPlaceholder='Buscar'
    />
)
}

export default CountryPicker;