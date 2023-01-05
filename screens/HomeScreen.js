import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Vai alla descrizione dei processi"
        onPress={() => navigation.navigate("Processi")}
      />
      <View style={styles.container}>
        <Button
          title="Vai alla descrizione dei thread"
          onPress={() => navigation.navigate("Thread")}
        />
      </View>
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
