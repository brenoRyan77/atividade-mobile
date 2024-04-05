import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const FlexboxExample = ({ initialColor }) => {
  const [secondBoxColor, setSecondBoxColor] = useState('blue');

  return (
    <View style={styles.container}>
      <View style={styles.box(initialColor)}></View>
      <View style={styles.box(secondBoxColor)}></View>
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
  box: color => ({
    width: 50,
    height: 50,
    margin: 5,
    backgroundColor: color,
  }),
});

export default FlexboxExample;
