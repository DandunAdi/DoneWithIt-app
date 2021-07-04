import React from "react";
import { View, Image, SafeAreaView, StyleSheet } from "react-native";

const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer} >
        <View style={{backgroundColor: "#fc5c65", width: 50, height: 50}} />
        <View style={{ backgroundColor: "#4ECDC4", width: 50, height: 50 }} />
      </View>
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </SafeAreaView>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    top: 20,
    justifyContent: "space-between",
    padding: 30
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%"
  }
})
 
export default ViewImageScreen;
