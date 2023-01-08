import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const MessageExchangeScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.main}>
      <Image
            source={require("../images/Messaggi.jpg")}
            style={styles.image}
        />
        <Text style={styles.title}>Scambio di messaggi</Text>
        <Text style={styles.description}>
          La comunicazione attraverso lo scambio di messaggi viene utilizzata solitamente nei sistemi distribuiti. I sistemi distribuiti sono quei sistemi che contemporaneamente devono eseguire uno stesso progetto ma sono situati in posti diversi quindi devono comunicare. I diversi processi sono eseguiti su computer differenti collegati da canali di comunicazione.
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.subtitle}>Primitive di comunicazione</Text>
        <Text style={styles.description}>
          I processi possono comunicare tra loro utilizzando le primitive di comunicazione `send()` e `receive()`. Il messaggio di cui si parla è composto da due parti: una serie di informazioni di controllo e il messaggio vero e proprio.
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.subtitle}>Send e Receive bloccanti o non bloccanti</Text>
        <Text style={styles.description}>
          La funzione `send()` può essere bloccante o non bloccante. È bloccante quando il processo che esegue la `send()` si blocca fino a quando il messaggio è stato ricevuto e ne ha avuto conferma tramite una ricevuta di ritorno (ad esempio, un ACK). È non bloccante nel caso in cui il processo, dopo aver spedito il messaggio, prosegue nella sua normale esecuzione. Allo stesso modo, la funzione `receive()` può essere bloccante o non bloccante. È bloccante quando il processo che esegue la `receive()` si ferma in attesa di ricevere il messaggio inviato da un altro processo. È non bloccante nel caso in cui il processo che esegue la `receive()` non si ferma in attesa del messaggio e ci si può trovare in due condizioni diverse: il messaggio era già stato inviato prima che il processo facesse la `receive()`, quindi appena il processo fa la `receive()` ottiene il messaggio; il messaggio non era stato mandato, ma il processo non attende, prosegue e perde il messaggio.
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.subtitle}>Indirizzamento diretto o indiretto</Text>
        <Text style={styles.description}>
          Abbiamo visto che il processo può inviare un messaggio direttamente al destinatario. Esiste anche l'indirizzamento indiretto, dove si utilizza una Mailbox. In questo caso le primitive di comunicazione diventano `send(Mailbox, Messaggio)` e `receive(Mailbox, Messaggio)`.
        </Text>
      </View>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    main: {
      alignItems: 'center',
      margin: 24,
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: "contain",
      },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      margin: 8,
    },
    subtitle: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 8,
    },
    description: {
      fontSize: 18,
      textAlign: 'center',
      margin: 8,
    },
  });
export default MessageExchangeScreen;  