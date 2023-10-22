import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import globalesStyles from "../styles/globalesStyles";
import Accueil from "../screens/Accueil";
import Ressources from "../screens/Ressources";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";

const AccueilStackNavigator = createStackNavigator();

export const AccueilNavigator = () => {
  return (
    <AccueilStackNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: globalesStyles.pink },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: globalesStyles.white,
      }}
    >
      <AccueilStackNavigator.Screen
        name="Accueil"
        component={Accueil}
        options={{
          title: "MyWay",
          headerShown: true,
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 20,
          },
          headerLeft: () => (
            <Image
              source={require("../assets/images/way4life.jpeg")} // Spécifiez la source de votre image
              style={{ width: 40, height: 40, marginRight: 10 }} // Style de l'image
            />
          ),
        }}
      />
      <AccueilStackNavigator.Screen name="Ressources" component={Ressources} />
    </AccueilStackNavigator.Navigator>
  );
};
