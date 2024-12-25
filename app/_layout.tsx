import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, title: "" }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="login" options={{ headerShown: true }} />
      <Stack.Screen name="signUp" options={{ headerShown: true }} />
      <Stack.Screen
        name="scrollview"
        
      />
    </Stack>
  );
}
