import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity ,StyleSheet, ScrollView, ViewBase } from "react-native";

const IntroductionScreen = () => {
  const EmpezarButton = () => {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Empezar</Text>
      </TouchableOpacity>
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const renderSlides = () => {
    return [
      
      {
        image: require("./assets/slide1.png"),
        mainText: "Encuentra cuidadores para tu casa y mascotas",
        subText: "Intercambia hospedaje por el cuidado de tu casa y mascotas.",
     
      },
      {
        image: require("./assets/slide2.png"),
        mainText: "Consigue alojamiento gratis",
        subText: "Recibe alojamiento gratuito mientras acompañas a mascotas.",
      },
      {
        image: require("./assets/slide3.png"),
        mainText: "Conecta con cuidadores confiables",
        subText: "Viaja con la tranquilidad de que tu casa y tus mascotas están en buenas manos.",
      }
    ].map((slide, index) => {
      return (
        <View key={index} style={(styles.slide)}>
          <Image source={slide.image} />
          <Text style={styles.mainText}>{slide.mainText}</Text>
          <Text style={styles.subText}>{slide.subText}</Text>
          
        </View>
      );
    });
  };

  return (
    <View>
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
      <View style={{ position: "absolute", bottom: 20, flexDirection: "row", alignSelf: "center" }}>
        {EmpezarButton()}
      </View>
</View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: 390,
    height: 700,
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
  button: {
    backgroundColor: "#575dfb",
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: "#f4f5ff",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 50,
    paddingVertical: 10,
  }
});

export default IntroductionScreen;