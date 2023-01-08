import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ThreadsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Image
            source={require("../images/Thread.jpg")}
            style={styles.image}
          />
          <Text style={styles.title}>I thread informatici</Text>
          <Text style={styles.description}>
            I thread informatici sono unità di esecuzione all'interno di un
            processo. Ogni processo può avere uno o più thread, che condividono
            la memoria e le risorse del processo.
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.subtitle}>Context switch</Text>
          <Text style={styles.description}>
            Un context switch è il processo di cambio del thread in esecuzione.
            Quando un thread viene sospeso e un altro viene ripreso, il sistema
            operativo deve eseguire un context switch per allocare le risorse
            del processore e la memoria al nuovo thread. Un context switch tra
            thread è solitamente più veloce di uno tra processi, poiché i thread
            condividono la memoria e le risorse del processo, mentre i processi
            hanno risorse allocate separate.
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.subtitle}>Stati dei thread</Text>
          <Text style={styles.description}>
            I thread possono essere in uno dei seguenti stati:
          </Text>
          <Text style={styles.description}>
            <Text style={styles.bulletPoint}>Ready:</Text> il thread è pronto
            per essere eseguito dal sistema operativo.
          </Text>
          <Text style={styles.description}>
            <Text style={styles.bulletPoint}>Running:</Text> il thread è in
            esecuzione sul processore.
          </Text>
          <Text style={styles.description}>
            <Text style={styles.bulletPoint}>Waiting:</Text> il thread è in
            attesa di un evento o di una risorsa per continuare l'esecuzione.
          </Text>
          <Text style={styles.description}>
            <Text style={styles.bulletPoint}>Sleeping:</Text> il thread è in
            pausa per un determinato periodo di tempo.
          </Text>
          <Text style={styles.description}>
            <Text style={styles.bulletPoint}>Blocking:</Text> il thread è in
            attesa di una risorsa che è attualmente utilizzata da un altro
            thread.
          </Text>
          <Text style={styles.description}>
            <Text style={styles.bulletPoint}>Dead:</Text> il thread ha
            completato l'esecuzione o è stato interrotto.
          </Text>
          <Image source={require("../images/StatiThread.png")} style={styles.image} />
        </View>

        <View style={styles.main}>
          <Text style={styles.subtitle}>Utilizzo</Text>
          <Text style={styles.description}>
            I thread vengono utilizzati per eseguire attività parallele
            all'interno di un processo, ad esempio per gestire l'input/output o
            il calcolo di grandi quantità di dati. Possono anche essere
            utilizzati per gestire l'accesso a risorse condivise all'interno del
            processo e prevenire conflitti tra thread che utilizzano le stesse
            risorse.
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
  bulletPoint: {
    fontSize: 18,
    margin: 8,
  },
});
export default ThreadsScreen;
