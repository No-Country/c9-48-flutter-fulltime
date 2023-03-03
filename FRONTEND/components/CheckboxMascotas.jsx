import CheckBox from '@react-native-community/checkbox';
import { React, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from "react-native";

const CheckboxMascotas = () => {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Casa', value: 'casa', checked: false },
        { id: 2, label: 'Departamento', value: 'depto', checked: false },
        { id: 3, label: 'Monoambiente', value: 'monoambiente', checked: false },
        { id: 4, label: '2 ambientes', value: '2ambientes', checked: false },
        { id: 5, label: '3 ambientes', value: '3ambientes', checked: false },
        { id: 6, label: '4 ambientes o más', value: '4ambientes', checked: false },
        { id: 7, label: 'TV', value: 'TV', checked: false },
        { id: 8, label: 'Balcón/Patio', value: 'balcón/patio', checked: false },
        { id: 9, label: 'Terraza', value: 'terraza', checked: false },
        { id: 10, label: 'Jardín', value: 'jardín', checked: false },
        { id: 11, label: 'Piscina', value: 'piscina', checked: false }
    ]);
    
    const leftCheckboxes = checkboxes.slice(0, 6);
    const rightCheckboxes = checkboxes.slice(6);
    
    const handleCheckboxToggle = (id) => {
        const updatedCheckboxes = checkboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
        setCheckboxes(updatedCheckboxes);
    };
    
    return (
        <View style={Styles.container}>
            <View style={Styles.column}>
                <FlatList
                    data={leftCheckboxes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={Styles.checkboxContainer}>                        
                            <CheckBox
                                disabled={false}
                                value={item.checked}
                                onValueChange={() => handleCheckboxToggle(item.id)}
                            />
                            <Text style={Styles.checkboxLabel}>{item.label}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={Styles.column}>
                <FlatList
                    data={rightCheckboxes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={Styles.checkboxContainer}>                        
                            
                            <CheckBox
                                disabled={false}
                                value={item.checked}
                                onValueChange={() => handleCheckboxToggle(item.id)}
                            />
                            <Text style={Styles.checkboxLabel}>{item.label}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'row',
        maxHeight: 250
    },
    column: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: 'pink'
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    checkboxLabel: {
        fontSize: 16,
        color: 'black'
    },
});

export default CheckboxMascotas;