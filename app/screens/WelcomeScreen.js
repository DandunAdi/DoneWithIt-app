import React from 'react';
import { View, ImageBackground, Image, Text, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/background.jpg")} style={styles.image}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </ImageBackground>
      <View style={{backgroundColor: "#fc5c65", height: 100}} />
      <View style={{backgroundColor: "#4ECDC4", height: 100}} />
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 100,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  }
})
 
export default WelcomeScreen;