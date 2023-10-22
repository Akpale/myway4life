import React from "react";
import { ImageBackground, StyleSheet, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Ressources = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/images/istockphoto-517188688-612x612.jpg")}
      style={styles.BtnAlign}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  BtnAlign: {
    flexDirection: "row", // Met les boutons en ligne
    flexWrap: "wrap", // Force les boutons à revenir à la ligne
    justifyContent: "center", // Centre les boutons horizontalement
    marginBottom: 70,
    resizeMode: "stretch", // Ou 'contain' selon vos besoins
    marginTop: 1,
    height: Dimensions.get("window").height,
  },
});

export default Ressources;
