import { Button, View, Text, Image } from "react-native";

export default function PetersonScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
            width: 340,
            backgroundColor: "white",
          }}
        >
          L'algoritmo di peterson (o tiebreaker) è un algoritmo che permette la
          mutua esclusione. Funziona nel seguente modo: Si hanno due variabili
          booleane condivise tra i due thread o processi che indicano il turno.
          Finché il turno di un processo non è finito l'altro processo rimarrà
          ad aspettare in un ciclo while. I lati negativi di questo algoritmo
          sono principalmente l'utilizzo di risorse inutili, quando un processo
          è nel while ad aspettare la CPU viene usata per niente. Il secondo
          lato negativo è che, a causa del modo in cui i moderni elaboratori
          eseguono le istruzioni elementari del linguaggio macchina come load e
          store, non è affatto certo che l'algoritmo di Peterson funzioni
          correttamente su tali sistemi.
        </Text>
        <Image
          source={require("../images/CodicePeterson.jpg")}
          style={{
            width: "50%",
            height: "50%",
          }}
          />
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
