import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNav from "./routes/AppStack";
//import store from "./redux/store";
//import { Provider } from "react-redux";

export default function App() {
  return;
  //<Provider store={store}>
  <AppNav />;
  //</Provider>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
