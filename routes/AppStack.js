import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AccueilNavigator } from "./AccueilNavStack";

const Stack = createStackNavigator();
const AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={AccueilNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
