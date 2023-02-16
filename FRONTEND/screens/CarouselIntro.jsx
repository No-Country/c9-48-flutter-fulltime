import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Button, useColorScheme } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CommonButton from "../components/CommonButton";

const CarouselIntro = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const OmitirButton = () => {
        return (
            <TouchableOpacity styles={styles.OmitirButton}>
                <Text style={styles.OmitirButtonText}>Saltar</Text>
            </TouchableOpacity>
        )

    }
    const EmpezarButton = () => {
        return (
            <Button
            title="Empezar"
                onPress={() => navigation.navigate('Bienvenidos')}
            />
        );
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const renderSlides = () => {
        return [
            {
                image: require("../assets/slide1.png"),
                mainText: "Encuentra cuidadores para tu casa y mascotas",
                subText: "Intercambia hospedaje por el cuidado de tu casa y mascotas.",
            },
            {
                image: require("../assets/slide2.png"),
                mainText: "Consigue alojamiento gratis",
                subText: "Recibe alojamiento gratuito mientras acompañas a mascotas.",
            },
            {
                image: require("../assets/slide3.png"),
                mainText: "Conecta con cuidadores confiables",
                subText: "Viaja con la tranquilidad de que tu casa y tus mascotas están en buenas manos.",
            }
        ].map((slide, index) => {
            return (
                <View key={index} style={(styles.slide)}>
                    <Image source={slide.image} />
                    <Text style={[styles.mainText, { color: isDarkMode ? Colors.white : Colors.black }]}>{slide.mainText}</Text>
                    <Text style={[styles.subText, { color: isDarkMode ? Colors.light : Colors.dark }]}>{slide.subText}</Text>
                </View>
            );
        });
    };

    // Return principal

    return (
        <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white, }}>

            <View style={{ position: "absolute", top: 0, flexDirection: "column", alignSelf: "flex-end" }}>
                {OmitirButton()}
            </View>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={e => {
                    setCurrentIndex(Math.round(e.nativeEvent.contentOffset.x / 330));
                }}
                scrollEventThrottle={16}
            >
                {renderSlides()}
            </ScrollView>
            <View style={{ position: "absolute", bottom: 160, flexDirection: "row", alignSelf: "center" }}>
                {[...Array(3)].map((_, i) => (
                    <View
                        key={i}
                        style={{
                            width: 20,
                            height: 5,
                            borderRadius: 5,
                            marginHorizontal: 5,
                            backgroundColor: i === currentIndex ? "#ff5e5e" : "#ccc"
                        }}
                    />
                ))}
            </View>
            <View style={{ position: "absolute", bottom: 80, flexDirection: "row", alignSelf: "center" }}>
                <CommonButton onPress={() => navigation.navigate('Bienvenidos')} ButtonColor={style.blue} />
            </View>
        </View>
    );

};
    
// Estilos

const styles = StyleSheet.create({
    slide: {
        width: 390,
        height: 750,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        flex: 1,
        overflow: "hidden"
    },
    mainText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20
    },
    subText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20
    },
    OmitirButton: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5
    },
    OmitirButtonText: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        paddingHorizontal: 50,
        paddingVertical: 10,
    }
});

export default CarouselIntro;