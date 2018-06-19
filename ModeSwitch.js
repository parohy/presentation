import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

class ModeSwitch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Switch
          onValueChange={this.props.onValueChange}
          tintColor="grey"
          onTintColor="red"
          value={this.props.value}
        />
        <Text style={[styles.label, { color: this.props.value ? 'white' : 'black' }]}>
          Night mode
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  label: {
    marginLeft: 10
  }
});

export default ModeSwitch;
