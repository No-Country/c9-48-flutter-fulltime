import {React } from "react";
import { StyleSheet, TouchableOpacity, View , Text} from "react-native";

const CommonButton = ({ buttonText, onPress, ButtonColor }) => {
    return (
        <View style={{padding: 20}}>
            <TouchableOpacity 
                style={ ButtonColor }
                onPress={onPress}>
                    <Text style={style.text}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}



style = StyleSheet.create({
    red: {
        backgroundColor: "#FF5E5E",
        width: 278,
        height: 56,
        padding: 14,
        borderRadius: 20
    },
    blue: {
        backgroundColor: "#575DFB",
        width: 278,
        height: 56,
        padding: 14,
        borderRadius: 20
    },
    text :{
        fontSize: 16,
        alignSelf: 'center',
        color: 'white'
    }
})


CommonButton.defaultProps = {
    buttonText: 'Siguiente',
    ButtonColor: style.red
}
export default CommonButton;