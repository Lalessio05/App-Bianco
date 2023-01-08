import HomeScreen from "./screens/HomeScreen";
import CharacterScreen from "./screens/CharacterScreen";
import ArgomentiScreen from "./screens/ArgomentiScreen";
import ThreadScreen from "./screens/ThreadScreen";
import MutexScreen from "./screens/MutexesScreen";
import ProcessScreen from "./screens/ProcessScreen";
import DeadlocksScreen from "./screens/DeadlockScreen";
import MessageExchangeScreen from "./screens/MessageExchangeScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Personaggi" component={CharacterScreen} />

        <Stack.Screen
          name="Argomenti"
          component={ArgomentiScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Semafori" component={MutexScreen} />
        <Stack.Screen name="Processi" component={ProcessScreen} />
        <Stack.Screen name="Thread" component={ThreadScreen} />
        <Stack.Screen name="Deadlock" component={DeadlocksScreen} />
        <Stack.Screen
          name="ScambioMessaggi"
          component={MessageExchangeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
