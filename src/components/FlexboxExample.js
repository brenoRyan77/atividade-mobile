import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexboxExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
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
    backgroundColor: 'blue',
    margin: 5,
  },
});

export default FlexboxExample;
