import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, FlatList, Text } from 'react-native';
import FlexboxExample from './src/components/FlexboxExample'; // Importando o componente FlexboxExample

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
  { id: '4', text: 'Item 4' },
  { id: '5', text: 'Item 5' },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <FlexboxExample initialColor="red" /> {/* Renderizando o componente FlexboxExample com a cor inicial "red" */}
      <Image
        style={styles.image}
        source={{ uri: 'https://example.com/image.jpg' }}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: 200,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
