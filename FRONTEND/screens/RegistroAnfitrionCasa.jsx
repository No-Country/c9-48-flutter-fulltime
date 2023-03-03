import * as React from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import ImageUploadBox from '../components/ImageUploadBox';
import CommonButton from '../components/CommonButton';
import CheckboxMascotas from '../components/CheckboxMascotas'

const RegistroAnfitrionCasa = ({ navigation }) => {
    const Separator = () => <View style={Styles.separator} />;


    return (
        <View style={Styles.container}> 
            <View>
                <Text style={Styles.RegistroTitle}>Encontrá un cuidador/a</Text>
                <Text style={Styles.SubBlue}>Seleccioná las características de tu casa.</Text>
            </View>
                <CheckboxMascotas/>
            <View>
                <Separator/>
                <Text style={Styles.SubBlue}>Fotos de mi casa</Text>
                <Text style={Styles.RegistroSub}>Sube al menos 6 fotos de tu casa o depto. (No incluyas información sensible de tu domicilio).</Text>
            </View>
            <View style={{flex: 1}}>
            <ScrollView horizontal>
                <ImageUploadBox />
                <ImageUploadBox />
                <ImageUploadBox />
                <ImageUploadBox />
                <ImageUploadBox />
                <ImageUploadBox />
            </ScrollView>

            </View>

            
            <View style={{ alignItems: 'center' }} >
                <CommonButton
                    onPress={() => navigation.navigate('RegistroAnfitrionMascota')}

                />
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'pink'
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
    SubBlue: {
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

export default RegistroAnfitrionCasa;