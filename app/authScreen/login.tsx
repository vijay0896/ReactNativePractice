import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState,useEffect } from "react";
import Button from "@/components/Button";

const login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const userdata = () => {
    console.log(email);
    console.log(Password);
  };

  // console.log("calling again again like we enter inputs")

  useEffect(()=>{
    console.log("Its Calling only one time while page reload")
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login screen</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          keyboardType="email-address" 
          placeholderTextColor={"gray"}
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          placeholderTextColor={"gray"}
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
        />
        <Button title="Login" onPress={userdata} />
      </View>
    </View>
  );
};

export default login;
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
