import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red" }]}
        onPress={() => navigation.navigate("Personaggi")}
      >
        <Text style={[styles.buttonText, styles.titleText]}>
          Personaggi che hanno creato e rivoluzionato l'informatica
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "blue" }]}
        onPress={() => navigation.navigate("Argomenti")}
      >
        <Text style={[styles.buttonText, styles.titleText]}>
          Argomenti affrontati nella
        </Text>
        <Text style={[styles.buttonText, styles.seasonText]}>Season 1</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seasonText: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
