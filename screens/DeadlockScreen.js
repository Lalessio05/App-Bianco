import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DeadlocksScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Image
            source={require("../images/Deadlock.jpg")}
            style={styles.image}
          />
          <Text style={styles.title}>Deadlock, Starvation, e Livelock</Text>
          <Text style={styles.description}>
            In informatica, i deadlock, la starvation, e il livelock sono tutte
            situazioni che possono verificarsi quando più processi o thread
            competono per risorse. Queste situazioni possono causare il blocco
            dei processi o dei thread, impedendo loro di progredire.
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.subtitle}>Deadlock</Text>
          <Text style={styles.description}>
            Un deadlock è una situazione in cui due o più processi sono in
            attesa l'uno dell'altro per rilasciare una risorsa, causando un
            stallo. Un modo per prevenire i deadlock è utilizzare un Resource
            Allocation Graph (RAG), in cui le risorse sono rappresentate come
            nodi e i processi come archi. Se c'è un ciclo nel grafo, significa
            che potrebbe esserci un deadlock. Un esempio di deadlock è il
            problema dei filosofi al ristorante, in cui cinque filosofi sono
            seduti attorno a un tavolo con cinque bacchette tra loro. Ogni
            filosofo ha bisogno di due bacchette per mangiare, e prenderà una
            bacchetta dalla sua sinistra e una dalla sua destra. Tuttavia, se
            tutti i filosofi prendono prima la bacchetta sulla destra, tutti
            saranno in attesa di una bacchetta sulla sinistra che viene tenuta
            da un altro filosofo, causando un deadlock.
          </Text>
          <Text style={styles.description}>
            Ci sono quattro condizioni che devono essere soddisfatte perché si
            verifichi un deadlock: 1. Mutua esclusione: le risorse possono
            essere utilizzate solo da un processo alla volta 2. Hold and wait: i
            processi in possesso di risorse possono continuare a richiedere
            nuove risorse senza rilasciare quelle che hanno, anche se sono
            bloccati 3. Nessuna prelazione: le risorse non possono essere tolte
            a un processo una volta che sono state concesse 4. Attesa circolare:
            due o più processi sono in attesa di risorse utilizzate da un altro
            processo del gruppo
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.subtitle}>Starvation</Text>
          <Text style={styles.description}>
            La starvation è una situazione in cui un processo è impossibilitato
            ad ottenere le risorse di cui ha bisogno per progredire, a causa di
            altri processi che utilizzano o bloccano costantemente le risorse.
            Un esempio di starvation è una situazione in cui un processo a bassa
            priorità viene costantemente interrotto da processi a priorità più
            alta, e non riesce ad eseguire.
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.subtitle}>Livelock</Text>
          <Text style={styles.description}>
            Il livelock è una situazione in cui due o più processi si "annullano
            a vicenda", facendo piccoli cambiamenti nello stato rispettivo in
            risposta alle azioni dell'altro. Ciò può causare un loop senza fine,
            impedendo ai processi di progredire. Un esempio di livelock è una
            situazione in cui due automobili si incontrano in una strada stretta
            e entrambe cercano di far passare l'altra, causando entrambe di
            rimanere bloccate senza progredire.
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

export default DeadlocksScreen;
