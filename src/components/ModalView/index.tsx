import React, { ReactNode } from "react";
import { View, Modal, ModalProps } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { Background } from "../Background";

type Props = ModalProps & {
  children: ReactNode;
};

export function ModalView({ children, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar}>{children}</View>
          </Background>
        </View>
      </View>
    </Modal>
  );
}
