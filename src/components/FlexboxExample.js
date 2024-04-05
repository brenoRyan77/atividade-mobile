import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

const FlexboxExample = ({ color }) => {
  const [firstBoxColor, setFirstBoxColor] = useState(color);
  const changeFirstBoxColor = () => {
    setFirstBoxColor('red');
  };

  return (
    <View style={styles.container}>
      {}
      <View style={[styles.box, { backgroundColor: firstBoxColor }]}></View>
      {}
      <View style={[styles.box, { backgroundColor: color }]}></View>
      {}
      <Button title="Mudar Cor" onPress={changeFirstBoxColor} />
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
