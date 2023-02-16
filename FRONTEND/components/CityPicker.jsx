

import { SelectList } from 'react-native-dropdown-select-list';

const CityPicker = ({ setSelected }) => {
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
    return (
        <SelectList
            setSelected={(val) => setSelected(val)}
            data={dataCities}
            save="value"
            placeholder='Seleccioná la ciudad...'
            searchPlaceholder='Buscar'
        />
    )
}

export default CityPicker;


