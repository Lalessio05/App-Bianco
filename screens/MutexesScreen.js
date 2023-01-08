import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const MutexesScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          source={require('../images/semaforo-colori.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>I semafori informatici</Text>
        <Text style={styles.description}>
          I semafori informatici sono utilizzati per gestire l'accesso a risorse condivise da parte di più processi o thread.
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.subtitle}>Come funzionano</Text>
        <Text style={styles.description}>
          Quando un processo o un thread vuole accedere a una risorsa condivisa, prima deve acquisire il semaforo associato alla risorsa. Se il semaforo è già stato acquisito da un altro processo o thread, il primo processo o thread deve attendere fino a quando il semaforo viene rilasciato.
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.subtitle}>Utilizzo</Text>
        <Text style={styles.description}>
          I semafori sono spesso utilizzati per prevenire race condition, ovvero situazioni in cui più processi o thread tentano di modificare la stessa risorsa contemporaneamente, causando risultati non previsti o incorretti.
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
    resizeMode: 'contain',
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

export default MutexesScreen;