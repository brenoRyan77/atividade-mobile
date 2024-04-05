import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexboxExample = ({ colors }) => {
  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <View key={index} style={[styles.box, { backgroundColor: color }]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    margin: 5,
  },
});

export default FlexboxExample;
