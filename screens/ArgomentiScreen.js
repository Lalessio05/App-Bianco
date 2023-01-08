import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

const IMAGE_SIZE = 100;

const ImageWithText = ({ image, text, onPress, style }) => (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <Image source={image} style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );

function getRandomPosition() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const top = Math.floor(Math.random() * (screenHeight - IMAGE_SIZE));
  const left = Math.floor(Math.random() * (screenWidth - IMAGE_SIZE));

  return { top, left };
}

const images = [
  {
    source: require("../images/semaforo-colori.jpg"),
    key: "1",
    text: "Semafori",
    navigateTo: "Semafori",
  },
  {
    source: require("../images/Processo.png"),
    key: "2",
    text: "Processi",
    navigateTo: "Processi",
  },
  {
    source: require("../images/Thread.jpg"),
    key: "3",
    text: "Thread",
    navigateTo: "Thread",
  },
  {
    source: require("../images/Messaggi.jpg"),
    key: "4",
    text: "Scambio messaggi",
    navigateTo: "ScambioMessaggi",
  },
  {
    source: require("../images/Deadlock.jpg"),
    key: "5",
    text: "Deadlock",
    navigateTo: "Deadlock",
  },
];
export default function ArgomentiScreen({ navigation }) {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const newPositions = images.map((image) => ({
      ...getRandomPosition(),
      ...image,
    }));
    setPositions(newPositions);
  }, []);

  return (
    <View>
      {positions.map((position) => (
        <ImageWithText
          key={position.key}
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            width: IMAGE_SIZE,
            height: IMAGE_SIZE,
          }}
          image={position.source}
          text={position.text}
          onPress={() => navigation.navigate(position.navigateTo)}
        />
      ))}
    </View>
  );
}
