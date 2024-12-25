import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Button from "@/components/Button";
const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> SignUp screen</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Name"
          placeholderTextColor={"gray"}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          placeholderTextColor={"gray"}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          placeholderTextColor={"gray"}
        />
         <Button title="Login" />
      </View>
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#25292e',
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "left",
    padding: 16,
    paddingVertical: 14,
  },
  inputView: {
    gap: 10,
    width: "100%",
    padding: 16,
    paddingVertical: 15,
  },
});
