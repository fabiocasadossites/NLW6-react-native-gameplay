import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://i.pinimg.com/474x/e2/28/9e/e2289e74123a12f15d6089a404428ee2.jpg";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
