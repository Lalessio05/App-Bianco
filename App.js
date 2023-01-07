import HomeScreen from "./screens/HomeScreen";
import CharacterScreen from "./screens/CharacterScreen";
import SharedSpacesScreen from "./screens/SharedSpacesScreen";
import MutexScreen from "./screens/MutexesScreen"
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
          options={{ headerShown:false }}
        />

        <Stack.Screen name="Personaggi" component={CharacterScreen}  />
        
        <Stack.Screen
          name="SharedSpaces"
          component={SharedSpacesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Semafori"
          component={MutexScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
