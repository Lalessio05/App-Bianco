import { Button, View, Text, TouchableOpacity, Image } from "react-native";

export default function InterruptScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ textAlign: "center", color:"black", fontSize:20, fontWeight: "bold", width: 340, backgroundColor:"white"}}>
          Una delle soluzioni per evitare che si verifichino deadlock,
          starvation o altri problemi è la disabilitazioni degli interrupt,
          quando un programma entra nella sezione critica nessun processo potrà
          "rubare" il processore, cosicché il processo potrà finire la sua
          sessione critica.
        </Text>
        <Image
          source={require("../images/Puzzle.jpg")}
          style={{
            position: "absolute",
            zIndex: -1,
            width: "100%",
            height: "100%",
          }}
        />
      </View>
    </View>
  );
}
