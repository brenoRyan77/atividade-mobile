import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import FlexboxExample from './src/components/FlexboxExample'; // Importando o componente FlexboxExample

export default function App() {
  return (
    <View style={styles.container}>
      <FlexboxExample initialColor="red" /> {/* Renderizando o componente FlexboxExample com a cor inicial "red" */}
      <StatusBar style="auto" />
    </View>
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
