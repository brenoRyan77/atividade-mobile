// DetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { itemId, otherParam } = route.params;

  return (
    <View>
      <Text>Item ID: {itemId}</Text>
      <Text>Other Param: {otherParam}</Text>
    </View>
  );
};

export default DetailsScreen;
