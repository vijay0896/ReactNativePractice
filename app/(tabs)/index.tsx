import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Modal from "react-native-modal";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";
export default function HomeScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [fontsLoad] = useFonts({
    Inter_600SemiBold,
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "Inter_600SemiBold" }}>Home Screen</Text>
      <Button  title="Show modal" onPress={() => setModalVisible(true)} />

      <Modal
        isVisible={isModalVisible}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View
          style={{ backgroundColor: "white", height: 200, borderRadius: 20 }}
        >
          <Button title="Hide modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
