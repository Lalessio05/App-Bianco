import { Button, View, Text, TouchableOpacity} from "react-native";

export default function InterruptScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white">
        Una delle soluzioni per evitare che si verifichino <TouchableOpacity onPress={()=> {navigation.navigate("Deadlock")}}><Text><Text className="text-white">deadlock</Text></Text></TouchableOpacity>, starvation
        o altri problemi possiamo utilizzare
      </Text>
    </View>
  );
}
