import { Children } from "react";
import { Button, View, Text, Dimensions, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Svg, Circle, Line, Image } from "react-native-svg";

export default function SharedSpacesScreen({ navigation }) {
  const screenWidth = Dimensions.get("window").width;
  const screenHeigh = Dimensions.get("window").height;
  const childRadius = 50;
  const FatherRadius = 100;
  return (
    <Svg className="bg-black">
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 365,
            height: 175,
            borderRadius: 125,
            borderWidth: 7.5,
            backgroundColor: "green",
            borderColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Come gestire spazi di memoria condivisi senza evitare deadlock
          </Text>
        </View>
      </View>

      <Image
        style={{ borderRadius: childRadius }}
        x={childRadius - childRadius}
        y={400 - childRadius}
        width={childRadius * 2}
        height={childRadius * 2}
        href={require("../images/semaforo-colori.jpg")}
        onPress={() => {
          navigation.navigate("Semafori");
        }}
      />

      <Image
        style={{ borderRadius: childRadius }}
        x={screenWidth / 2 - childRadius * 2 - 50}
        y={600}
        width={childRadius * 3}
        height={childRadius * 2.5}
        href={require("../images/CartelloStop.png")}
        onPress={() => {
          navigation.navigate("SpiegazioneInterrupt");
        }}
      />
      <Image
        style={{ borderRadius: childRadius }}
        x={screenWidth / 2 + 20}
        y={550}
        width={childRadius * 2}
        height={childRadius * 2}
        href={require("../images/PetersonProvvisorio.png")}
        onPress={() => {
          navigation.navigate("AlgoritmoPeterson");
        }}
      />
      <Image
        style={{ borderRadius: childRadius }}
        x={screenWidth - childRadius * 2}
        y={371}
        width={childRadius * 2}
        height={childRadius * 2}
        href={require("../images/TestAndSetProvvisorio.png")}
        onPress={() => {
          navigation.navigate("TestAndSet");
        }}
      />
      <Line
        x1={screenWidth / 2}
        y1={126 + FatherRadius}
        x2={childRadius}
        y2={400 - 38}
        stroke="white"
        strokeWidth="2"
      />
      <Line
        x1={screenWidth / 2}
        y1={126 + FatherRadius}
        x2={screenWidth / 2 - childRadius * 1.5}
        y2={600}
        stroke="white"
        strokeWidth="2"
      />
      <Line
        x1={screenWidth / 2}
        y1={126 + FatherRadius}
        x2={screenWidth / 2 + childRadius}
        y2={600}
        stroke="white"
        strokeWidth="2"
      />
      <Line
        x1={screenWidth / 2}
        y1={126 + FatherRadius}
        x2={screenWidth - childRadius}
        y2={400}
        stroke="white"
        strokeWidth="2"
      />
    </Svg>
  );
}
