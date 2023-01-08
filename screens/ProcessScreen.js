import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ProcessesScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Image
            source={require("../images/Processo.png")}
            style={styles.image}
          />
          <Text style={styles.title}>I processi informatici</Text>
          <Text style={styles.description}>
            I processi informatici sono eseguibili che vengono eseguiti dal
            sistema operativo di un computer. Ogni processo ha una sua memoria e
            risorse allocate dal sistema operativo, e può essere composto da uno
            o più thread.
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.subtitle}>Come funzionano</Text>
          <Text style={styles.description}>
            Quando si avvia un processo, il sistema operativo assegna una
            porzione di memoria e altre risorse al processo e lo esegue. I
            processi possono comunicare tra loro attraverso l'invio di messaggi
            o l'utilizzo di risorse condivise, come file o semafori.
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.subtitle}>Utilizzo</Text>
          <Text style={styles.description}>
            I processi vengono utilizzati per eseguire diverse attività
            all'interno del sistema operativo, come l'esecuzione di programmi o
            l'esecuzione di attività di sistema. Possono anche essere utilizzati
            per gestire l'accesso a risorse condivise e prevenire conflitti tra
            thread o processi che utilizzano le stesse risorse.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  main: {
    alignItems: "center",
    margin: 24,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 8,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
});
export default ProcessesScreen;
