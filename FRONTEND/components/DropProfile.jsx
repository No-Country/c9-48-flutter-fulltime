import {React, useState} from 'react'
import { TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

const DropProfile = ({Title, Texto}) => {
    const [showThis, setShowThis] = useState(false);
    return(
        <TouchableOpacity onPress={() => setShowThis(!showThis)}>
            <Text style={{alignSelf: 'center'}}>{Title}</Text>
            {showThis ? (<TextInput style={style.input} multiline>{Texto}</TextInput>) : null}
        </TouchableOpacity>
    )
};

style = StyleSheet.create({
    input: {
        height: 80,
        margin: 12,
        borderWidth: 1.5,
        borderColor: '#575DFB',
        borderRadius: 16,
        padding: 10,
    },
})

export default DropProfile;