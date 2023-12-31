import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './src/screens/HomeScreens';
import LoginScreens from './src/screens/LoginScreens';
import RegistesScreens from './src/screens/RegistesScreens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
     <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreens}  options={{ title: 'Overview' }} />
      <Stack.Screen name='Risgister' component={RegistesScreens} />
      <Stack.Screen name='Home' component={HomeScreens}  />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
