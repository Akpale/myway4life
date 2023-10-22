import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import globalesStyles from "../styles/globalesStyles";
import { MaterialIcons } from "@expo/vector-icons";

const BtnAccueil = ({ title, nameIcons, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnMenu}>
        <MaterialIcons name={nameIcons} size={30} color={globalesStyles.pink} />

        <Text style={styles.textBtnMenu}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BtnAccueil;

const styles = StyleSheet.create({
  textBtnMenu: {
    color: globalesStyles.pink,
    fontSize: 18,
  },
  btnMenu: {
    backgroundColor: globalesStyles.white,
    borderRadius: 10,
    height: 90,
    margin: 20,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
});
