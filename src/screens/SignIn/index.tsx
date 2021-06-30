import React, { useContext } from "react";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
// import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/auth";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function SignIn() {
  // const navigation = useNavigation();
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    // navigation.navigate("Home");
    await signIn();
    try {
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image source={IllustrationImg} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{"\n"}e organize suas {"\n"}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{"\n"}
            favoritos com seus amigos
          </Text>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon
              title="Entrar com Discord"
              activeOpacity={0.5}
              onPress={handleSignIn}
            />
          )}
        </View>
      </View>
    </Background>
  );
}
