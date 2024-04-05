import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexboxExample = ({ color }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: color }]}></View>
      <View style={[styles.box, { backgroundColor: color }]}></View>
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
