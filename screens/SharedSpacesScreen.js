import { Button, View, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Svg, Circle, Line, Image } from "react-native-svg";

export default function SharedSpacesScreen( {navigation}) {
  const screenWidth = Dimensions.get("window").width;
  const screenHeigh = Dimensions.get("window").height;
  const childRadius = 50;
  const FatherRadius = 100;
  return (
    <Svg className="bg-black">
      <Image
        style={{ borderRadius: FatherRadius }}
        x={screenWidth / 2 - FatherRadius}
        y={126 - FatherRadius}
        width={FatherRadius * 2}
        height={FatherRadius * 2}
        href={require("../images/Ada_Lovelace.jpg")}
      />
      <Image
        style={{ borderRadius: childRadius }}
        x={childRadius - childRadius}
        y={400 - childRadius}
        width={childRadius * 2}
        height={childRadius * 2}
        href={require("../images/semaforo-colori.jpg")}
        onPress={() => {
            navigation.navigate("Semafori")
        }}
      />
      <Circle
        cx={screenWidth / 2 - childRadius}
        cy={600}
        r={childRadius}
        fill="transparent"
      />
      <Circle
        cx={screenWidth / 2 + childRadius}
        cy={600}
        r={childRadius}
        fill="transparent"
      />
      <Circle
        cx={screenWidth - childRadius}
        cy={400}
        r={childRadius}
        fill="transparent"
      />
      <Line
        x1={screenWidth / 2}
        y1={126}
        x2={childRadius}
        y2={400-38}
        stroke="white"
        strokeWidth="2"
      />
      <Line
        x1={screenWidth / 2}
        y1={126}
        x2={screenWidth / 2 - childRadius}
        y2={600}
        stroke="white"
        strokeWidth="2"
      />
      <Line
        x1={screenWidth / 2}
        y1={126}
        x2={screenWidth / 2 + childRadius}
        y2={600}
        stroke="white"
        strokeWidth="2"
      />
      <Line
        x1={screenWidth / 2}
        y1={126}
        x2={screenWidth - childRadius}
        y2={400}
        stroke="white"
        strokeWidth="2"
      />
      <Text
        x={screenWidth / 2}
        y={126}
        fontSize={20}
        textAnchor="middle"
        fill="black"
      >
        Parent
      </Text>
    </Svg>
  );
}
