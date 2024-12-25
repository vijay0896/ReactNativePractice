import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
export default function AboutScreen() {
  const router = useRouter();
  const GoScrollView = () => {
    router.navigate("/view/scrollview")
  };
  return (
    <View style={styles.container}>
      <Button title={"Go to Scroll View"} onPress={GoScrollView} />
    </View>
  );
}

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
});
