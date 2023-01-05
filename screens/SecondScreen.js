import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text } from "react-native";
import { StackActions } from "@react-navigation/native";
export default function SecondScreen({ navigation}) {
  return (
    <View style={styles.container}>
        <Text>Processi credo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
