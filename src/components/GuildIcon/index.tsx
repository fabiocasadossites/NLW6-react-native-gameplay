import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import DiscordSvg from "../../assets/discord.svg";

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
};

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
  // "https://i.pinimg.com/474x/e2/28/9e/e2289e74123a12f15d6089a404428ee2.jpg";
  return (
    <View style={styles.container}>
      {iconId ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  );
}
