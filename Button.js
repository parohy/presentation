import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const Button = ({ onPress, label, backgroundColor }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={[styles.container, { backgroundColor }]}>
      <Text>{label}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  labelStyle: {
    fontSize: 12,
    color: 'black'
  }
});

export default Button;
