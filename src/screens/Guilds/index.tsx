import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Guild } from "../../components/Guild";
import { GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
    {
      id: "2",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
    {
      id: "3",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
    {
      id: "4",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
    {
      id: "5",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
    {
      id: "6",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
    {
      id: "7",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
      />
    </View>
  );
}
