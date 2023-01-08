import { Button, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Button
        color={"red"}
        title="Personaggi che hanno creato e rivoluzionato l'informatica"
        onPress={() => navigation.navigate("Personaggi")}
      />
      <View>
        <Button
          title="Argomenti affrontati durante l'anno"
          onPress={() => navigation.navigate("Argomenti")}
        />
      </View>
    </View>
  );
}
