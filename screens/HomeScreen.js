import { StatusBar } from "expo-status-bar";
import {Button, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Button color={"red"}
        title="Vai alla descrizione dei processi"
        onPress={() => navigation.navigate("Processi")}
      />
      <View >
        <Button
          title="Vai alla descrizione dei thread"
          onPress={() => navigation.navigate("Thread")}
        />
      </View>
    </View>
  );
}


