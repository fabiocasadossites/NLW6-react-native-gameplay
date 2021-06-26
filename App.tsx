import React from "react";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";

// aplicando o loading das fonts carregadas
import AppLoading from "expo-app-loading";

//definindo as fontes
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_400Regular,
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from "@expo-google-fonts/rajdhani";

export default function App() {
  //chamando as fonts para a aplicação
  const [fontsloaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsloaded) {
    return <AppLoading />;
  }
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}
