import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text } from "react-native";

export default function ThirdScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Thread credo</Text>
      
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
