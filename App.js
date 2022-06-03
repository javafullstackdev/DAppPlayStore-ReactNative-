import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Logo from './components/Logo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Welcome from './components/Welcome';
import SetupWallet from './components/SetupWallet';
import CreatePassword from './components/CreatePassword.js'
import SecureWallet from './components/SecureWallet'
import SeedPhrase from './components/SeedPhrase'


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
const Stack = createNativeStackNavigator();

  return (
<PaperProvider>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          header: () => null,
          contentStyle: { backgroundColor: 'white' },
        }}>
          <Stack.Screen name="" component={SeedPhrase} />
          </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
   
  );
}

