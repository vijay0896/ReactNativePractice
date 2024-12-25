import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useReducer } from "react";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
const profile = () => {
  const router = useRouter();
  const GotoLogin = () => {
    router.navigate("/authScreen/login")
    // Alert.alert(
    //   "Confirmation",
    //   "Are you sure you want to go back to the home screen?",
    //   [
    //     {
    //       text: "Cancel",
    //     },
    //     {
    //       text: "Yes",
    //       onPress: () => router.navigate("/login"),
    //     },
    //   ],
    //   { cancelable: false }
    // );
  };
  const GotoSignup =()=>{
    router.navigate("/authScreen/SignUp")

  }
  return (
    <View style={styles.container}>
      <Text>profile</Text>
      <Button title="Login" onPress={GotoLogin} />
      <Button title="SignUp" onPress={ GotoSignup } />
    </View>
  );
};

export default profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
