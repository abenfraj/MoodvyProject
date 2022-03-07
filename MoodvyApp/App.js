import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProfilePage from "./pages/ProfilePage";
import WelcomePage from "./pages/WelcomePage";
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export const ROUTE = {
  WELCOME_TAB : {
      MAIN: "Accueil",
      PROFIL: "Profil"
  },
  TODO_TAB: {
      MAIN: "Todo"
  }
};
const Stack = createStackNavigator();
export default function App() {
  return (
    <Stack.Navigator initialRouteName={ROUTE.WELCOME_TAB.MAIN}>
      <Stack.Screen name={ROUTE.WELCOME_TAB.MAIN} component={WelcomePage} />
      <Stack.Screen name={ROUTE.WELCOME_TAB.PROFIL} component={ProfilePage} />
    </Stack.Navigator>
  );
};
// https://prod.liveshare.vsengsaas.visualstudio.com/join?CFA60F1244508BFD006E681A6B706C20DF94
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
