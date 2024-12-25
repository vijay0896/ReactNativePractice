import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#25292e",

    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBlockEnd: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
