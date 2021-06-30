import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { GuildIcon } from "../GuildIcon";
import { Feather } from "@expo/vector-icons";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};
type Props = TouchableOpacityProps & {
  data: GuildProps;
};

export function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon guildId={data.id} iconId={data.icon} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}> {data.name}</Text>
          <Text style={styles.type}>
            {data.owner ? "Admistrador" : "Convidado"}
          </Text>
        </View>
      </View>
      <Feather
        name="chevron-right"
        color={theme.colors.heading}
        fontSize={24}
      />
    </TouchableOpacity>
  );
}
